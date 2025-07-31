// db-operations.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const toBool = (val) => {
    if (typeof val === 'boolean') return val; // already a boolean
    if (typeof val === 'string') return val.trim().toLowerCase() === 'true';
    return false; // fallback for null, undefined, numbers, objects, etc.
  };

const toIntOrNull = (val) => val !== undefined && val !== null && val !== '' ? parseInt(val) : null;
  
// Function to save sellers data to database
async function saveSellersToDb(sellers, marketplaceCode) {
  try {
    // Process sellers in chunks to avoid overloading the database
    const chunkSize = 500;
    let totalSaved = 0;
    
    for (let i = 0; i < sellers.length; i += chunkSize) {
      const chunk = sellers.slice(i, i + chunkSize);
      
      // Map the data to match your database schema
      const sellerData = chunk.map(seller => {
        // Handle date fields
        const processDate = (dateStr) => {
          if (!dateStr) return null;
          const date = new Date(dateStr);
          return isNaN(date.getTime()) ? null : date;
        };

        return {
          // Include all fields from the CSV
          sellerEmails: seller.sellerEmails || null,
          note: seller.note || null,
          collectionExcluded: toBool(seller.collectionExcluded),
          name: seller.name || null,
          primaryCategoryId: toIntOrNull(seller.primaryCategoryId),
          primarySubCategoryId: toIntOrNull(seller.primarySubCategoryId),
          stateFromMerchant: seller.stateFromMerchant || null,
          whoIsRecord: seller.whoIsRecord || null,
          legalName: seller.legalName || null,
          disposition: seller.disposition || null,
          marketplace: marketplaceCode,
          qualifiedBrands: toIntOrNull(seller.qualifiedBrands),
          brandOwnership: seller.brandOwnership || null,
          singleBrand: toBool(seller.singleBrand),
          brandNameMatch: toBool(seller.brandNameMatch),
          closeBrand: toBool(seller.closeBrand),
          checkedForEmails: toBool(seller.checkedForEmails),
          haveEmails: toBool(seller.haveEmails),
          email: seller.email || null,
          contactedDate: processDate(seller.contactedDate),
          contacted: toBool(seller.contacted),
          profilingStatus: seller.profilingStatus || null,
          confirmedEmail: seller.confirmedEmail || null,
          phone: seller.phone || null,
          confirmedPhone: seller.confirmedPhone || null,
          confirmedRealWorldName: seller.confirmedRealWorldName || null,
          lastUpdated: processDate(seller.lastUpdated),
          dateUpdated: processDate(seller.dateUpdated),
          primaryCategory: seller.primaryCategory || null,
          primarySubCategory: seller.primarySubCategory || null,
          businessName: seller.businessName || null,
          amazonSellerId: seller.amazonSellerId || null,
          estimateSales: seller.estimateSales ? parseFloat(seller.estimateSales) : null,
          avgPrice: seller.avgPrice ? parseFloat(seller.avgPrice) : null,
          percentFba: seller.percentFba ? parseFloat(seller.percentFba) : null,
          numberReviewsLifetime: toIntOrNull(seller.numberReviewsLifetime), 
          numberReviews30Days: toIntOrNull(seller.numberReviews30Days),
          numberWinningBrands: toIntOrNull(seller.numberWinningBrands),
          numberAsins: toIntOrNull(seller.numberAsins),
          numberTopAsins: toIntOrNull(seller.numberTopAsins),
          street: seller.street || null,
          city: seller.city || null,
          state: seller.state || null,
          country: seller.country || null,
          zipCode: seller.zipCode || null,
          numBrands1000: toIntOrNull(seller.numBrands1000),
          moMGrowth: seller.moMGrowth ? parseFloat(seller.moMGrowth) : null,
          threeMonthGrowth: seller.threeMonthGrowth ? parseFloat(seller.threeMonthGrowth) : null,
          sixMonthGrowth: seller.sixMonthGrowth ? parseFloat(seller.sixMonthGrowth) : null,
          yearGrowth: seller.yearGrowth ? parseFloat(seller.yearGrowth) : null,
          moMGrowthCount: toIntOrNull(seller.moMGrowthCount),
          sixMonthGrowthCount: toIntOrNull(seller.sixMonthGrowthCount),
          isSuspended: toBool(seller.isSuspended),
          lastSuspendedDate: processDate(seller.lastSuspendedDate),
          startedSellingDate: processDate(seller.startedSellingDate)
        };
      });

      // Use createMany for bulk insertion
      const result = await prisma.seller.createMany({
        data: sellerData,
        skipDuplicates: true, // Skip records that would cause unique constraint violations
      });
      
      totalSaved += result.count;
    }
    
    return totalSaved;
  } catch (error) {
    console.error("Error saving to database:", error);
    throw error;
  }
}

// Function to update primaryCategoryIdString for a specific marketplace
async function updateCategoryStrings(marketplaceCode) {
  try {
    console.log(`Updating category strings for ${marketplaceCode}...`);
    
    // Get unique category IDs for this marketplace
    const uniqueCategories = await prisma.seller.groupBy({
      by: ['primaryCategoryId'],
      where: {
        marketplace: marketplaceCode,
        primaryCategoryId: { not: null }
      }
    });
    
    console.log(`Found ${uniqueCategories.length} unique category IDs for ${marketplaceCode}`);
    
    // Process each category ID
    for (const category of uniqueCategories) {
      const categoryId = category.primaryCategoryId;
      
      // Look up the string value from the category mappings table
      const mapping = await prisma.categoryMapping.findUnique({
        where: {
          marketplace_categoryId: {
            marketplace: marketplaceCode,
            categoryId: categoryId
          }
        }
      });
      
      const categoryString = mapping ? mapping.categoryString : `Category ${categoryId}`;
      
      // Update all records with this category ID in this marketplace
      const result = await prisma.seller.updateMany({
        where: {
          marketplace: marketplaceCode,
          primaryCategoryId: categoryId
        },
        data: {
          primaryCategoryIdString: categoryString
        }
      });
      
      console.log(`Updated ${result.count} records for category ${categoryId} to "${categoryString}"`);
    }
    
    return true;
  } catch (error) {
    console.error(`Error updating category strings for ${marketplaceCode}:`, error);
    throw error;
  }
}

// Function to update a mapping between category ID and string
async function upsertCategoryMapping(marketplaceCode, categoryId, categoryString) {
  try {
    const result = await prisma.categoryMapping.upsert({
      where: {
        marketplace_categoryId: {
          marketplace: marketplaceCode,
          categoryId: categoryId
        }
      },
      update: {
        categoryString: categoryString
      },
      create: {
        marketplace: marketplaceCode,
        categoryId: categoryId,
        categoryString: categoryString
      }
    });
    
    return result;
  } catch (error) {
    console.error(`Error upserting category mapping:`, error);
    throw error;
  }
}

// Close DB connection
async function disconnectDb() {
  await prisma.$disconnect();
}

module.exports = {
  saveSellersToDb,
  updateCategoryStrings,
  upsertCategoryMapping,
  disconnectDb
};