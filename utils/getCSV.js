// export-sellers-csv.js
const { PrismaClient } = require('@prisma/client');
const fs = require('fs');
const path = require('path');
const { Parser } = require('json2csv');

const prisma = new PrismaClient();

// Configuration - Edit these values as needed
const CONFIG = {
  marketplaceCode: "US", // Marketplace code (US, UK, DE, etc.)
  chunkSize: 60000,      // Max records per CSV file
  batchSize: 5000,       // Records to fetch from DB per query (adjust based on memory)
  outputDir: "./exports30thJuly", // Directory for CSV files
  fields: null           // Optional specific fields (null = all)
                         // Example: ["name", "amazonSellerId", "estimateSales"]
};

// Helper function to sanitize data (simplified slightly, ensure it covers your needs)
// Kept your original sanitization logic as it might be specific to your data issues
function sanitizeData(data) {
  if (!data) return data;

  if (Array.isArray(data)) {
    return data.map(item => sanitizeData(item));
  }

  if (typeof data === 'object' && data !== null) {
    const sanitized = {};
    for (const [key, value] of Object.entries(data)) {
      if (value === undefined) {
        sanitized[key] = null; // Represent undefined as null for CSV
      } else if (value instanceof Date) {
        sanitized[key] = value.toISOString();
      } else if (typeof value === 'string') {
        // Remove null bytes and potential problematic characters
        sanitized[key] = value
          .replace(/\0/g, '') // Remove null bytes
          .replace(/[\uD800-\uDFFF]/g, ''); // Remove unpaired surrogate code points
      } else if (typeof value === 'object' && value !== null) {
        // Recursively sanitize nested objects if necessary (might not be ideal for flat CSV)
        // Consider flattening or converting nested objects to JSON strings if needed
        sanitized[key] = sanitizeData(value); // Or JSON.stringify(value)
      } else {
        sanitized[key] = value;
      }
    }
    return sanitized;
  }
  return data;
}


/**
 * Writes an array of records to a CSV file.
 * @param {Array<object>} records - The data records.
 * @param {number} fileCounter - The current file number.
 */
function writeChunkToFile(records, fileCounter) {
  if (!records || records.length === 0) {
    console.log(`Skipping empty chunk for file ${fileCounter}.`);
    return;
  }

  try {
    // Determine fields dynamically from the first record if not specified
    const csvFields = CONFIG.fields || Object.keys(records[0]);
    const json2csvParser = new Parser({
      fields: csvFields,
      defaultValue: '' // Use empty string for null/undefined values
    });

    const csv = json2csvParser.parse(records);

    // Create filename
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = `${CONFIG.marketplaceCode}_sellers_${timestamp}_chunk${fileCounter}.csv`;
    const filePath = path.join(CONFIG.outputDir, filename);

    // Write to file
    fs.writeFileSync(filePath, csv);
    console.log(`Successfully wrote ${records.length} records to ${filePath}`);

  } catch (error) {
    console.error(`Error writing chunk ${fileCounter} to CSV:`, error);
    // Decide if you want to stop or continue on write error
    // throw error; // Uncomment to stop execution on write error
  }
}

/**
 * Export seller data using cursor pagination.
 */
async function exportSellersToCSV() {
  console.log(`Starting export for ${CONFIG.marketplaceCode} marketplace...`);
  console.log(`Chunk size: ${CONFIG.chunkSize}, Batch size: ${CONFIG.batchSize}`);

  try {
    // Create output directory if it doesn't exist
    if (!fs.existsSync(CONFIG.outputDir)) {
      fs.mkdirSync(CONFIG.outputDir, { recursive: true });
    }

    let cursor = 0; // Start with ID > 0 (assuming IDs are positive integers)
    let fileCounter = 1;
    let recordsInCurrentChunk = [];
    let totalRecordsExported = 0;
    let hasMoreData = true;

    // Prepare query options
    const queryOptionsBase = {
      where: { marketplace: CONFIG.marketplaceCode },
      take: CONFIG.batchSize,
      orderBy: {
        id: 'asc', // Order by ID for stable pagination
      },
    };

    // Add specific fields selection if provided
    if (CONFIG.fields && Array.isArray(CONFIG.fields) && CONFIG.fields.length > 0) {
      queryOptionsBase.select = CONFIG.fields.reduce((acc, field) => {
        acc[field] = true;
        return acc;
      }, { id: true }); // Always include 'id' for cursor
    }

    console.log("Fetching data in batches using cursor pagination...");

    while (hasMoreData) {
      const queryOptions = {
        ...queryOptionsBase,
        cursor: cursor ? { id: cursor } : undefined, // Set cursor if not the first batch
        skip: cursor ? 1 : 0, // Skip the cursor record itself on subsequent fetches
      };

      // Fetch the next batch
      const batchData = await prisma.seller.findMany(queryOptions);

      if (batchData.length === 0) {
        hasMoreData = false; // No more data left
        console.log("No more data found in the database.");
        break;
      }

      // Sanitize the fetched batch
      const sanitizedBatch = sanitizeData(batchData);

      // Add sanitized batch to the current chunk's data
      recordsInCurrentChunk.push(...sanitizedBatch);
      totalRecordsExported += sanitizedBatch.length;

      // Update the cursor to the ID of the last record fetched in this batch
      cursor = batchData[batchData.length - 1].id;

      console.log(`Fetched batch of ${batchData.length} records. Last ID: ${cursor}. Total exported so far: ${totalRecordsExported}`);

      // If the current chunk reaches the desired size, write it to a file
      if (recordsInCurrentChunk.length >= CONFIG.chunkSize) {
        console.log(`Chunk ${fileCounter} reached size ${recordsInCurrentChunk.length}. Writing to file...`);
        writeChunkToFile(recordsInCurrentChunk, fileCounter);
        fileCounter++;
        recordsInCurrentChunk = []; // Reset for the next chunk
      }
    } // End while loop

    // Write any remaining records in the last chunk
    if (recordsInCurrentChunk.length > 0) {
      console.log(`Writing remaining ${recordsInCurrentChunk.length} records to final chunk ${fileCounter}...`);
      writeChunkToFile(recordsInCurrentChunk, fileCounter);
    }

    console.log(`Export completed successfully for ${CONFIG.marketplaceCode}! Total records exported: ${totalRecordsExported}`);

  } catch (error) {
    console.error("Error during export process:", error);
    // Consider more specific error handling if needed
  }
}

// Function to close database connection
async function disconnectDb() {
  await prisma.$disconnect();
  console.log("Database disconnected");
}

// Run the script
async function main() {
  try {
    await exportSellersToCSV();
  } catch (error) {
    // Catch errors not handled within exportSellersToCSV
    console.error("Fatal error during script execution:", error);
  } finally {
    await disconnectDb();
  }
}

main().catch(e => {
  console.error("Unhandled error in main:", e);
  process.exit(1); // Exit with error code
});