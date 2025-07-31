// smartscouts-scraper.js
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));
const { saveSellersToDb, disconnectDb } = require('./utils/save_db');

// Configuration - Easy to modify
const CONFIG = {
  marketplaceCode: "AU", // Change this to target different marketplaces: US, UK, DE, CA, MX, FR, IT, ES, JP, AU
  totalRows: 59010, // Set this to the number of rows to scrape, //UK:-554691, US: 2105983, CA: 623356, MX: 1240, DE: 334602, FR: 268287, IT: 63, ES: 236754, JP: 215953, AU: 59001, IN: 275539
  batchSize: 10000,   // Number of records to fetch in each API call //A2JR0X0DKWB8U
  delayBetweenRequests: 1000 // Milliseconds between requests
};

const baseUrl = 'https://smartscoutapi-east.azurewebsites.net/api/sellers/search';

const columns = [
    "name", "amazonSellerId", "primaryCategoryId", "primarySubCategory",
    "estimateSales", "avgPrice", "percentFba", "numberWinningBrands", "numberAsins",
    "numberTopAsins", "street", "city", "state", "country", "zipCode", "businessName", "numBrands1000",
    "numberReviewsLifetime", "numberReviews30Days", "moMGrowth", "moMGrowthCount", "isSuspended", "lastSuspendedDate", "startedSellingDate", "amazonSellerId", "note"
];

function getHeaders(marketplaceCode) {
  return {
    "Accept": "text/plain",
    "Accept-Language": "en-US,en;q=0.9",
    "Authorization": `Bearer ${process.env.BEARER_TOKEN}`,
    "Connection": "keep-alive",
    "Content-Type": "application/json-patch+json",
    "Origin": "https://app.smartscout.com",
    "Referer": "https://app.smartscout.com/",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
    "X-SmartScout-Marketplace": marketplaceCode
  };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchSellersData() {
  const { marketplaceCode, totalRows, batchSize, delayBetweenRequests } = CONFIG;
  
  console.log(`Starting data fetch for ${marketplaceCode}...`);
  console.log(`Total rows: ${totalRows}, Batch size: ${batchSize}`);
  
  let totalSaved = 0;
  
  for (let startRow = 59004; startRow < totalRows; startRow += batchSize) {
    const endRow = Math.min(startRow + batchSize, totalRows);

    const payload = {
      "loadDefaultData": false,
      "filter": {},
      "pageFilter": {
        "startRow": startRow,
        "endRow": endRow,
        "includeTotalRowCount": false,
        "sortModel": [],
        "fields": columns
      }
    };

    try {
      console.log(`${marketplaceCode}: Fetching rows ${startRow} to ${endRow}...`);
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: getHeaders(marketplaceCode),
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`HTTP error! status: ${response.status}, message: ${errorText}`);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if(data) console.log(`Fetched Data Successfully............`)
    //   console.log(`${JSON.stringify(data)}`)
      const sellers = data.payload || [];

      // Store the data in the database
      if (sellers.length > 0) {
        const savedCount = await saveSellersToDb(sellers, marketplaceCode);
        totalSaved += savedCount;
        console.log(`${marketplaceCode}: Saved ${savedCount} records to database. Total saved: ${totalSaved}`);
      } else {
        console.log(`${marketplaceCode}: No data returned for rows ${startRow} to ${endRow}`);
      }

    } catch (error) {
      console.error(`Error at ${marketplaceCode} rows ${startRow}-${endRow}:`, error.message);
      // Wait longer on error before retrying
      await delay(5000);
      // Decrement startRow to retry this batch
      startRow -= batchSize;
      continue;
    }

    // Delay between requests
    await delay(delayBetweenRequests);
  }
  
  console.log(`Completed fetching data for ${marketplaceCode}`);
  console.log(`Total records saved: ${totalSaved}`);
}

// Run the scraper
async function main() {
  try {
    await fetchSellersData();
  } catch (error) {
    console.error("Fatal error:", error);
  } finally {
    await disconnectDb();
  }
}

main().catch(console.error);

// const marketplaceNames = {
//     "US": "United States", done
//     "UK": "United Kingdom", done
//     "DE": "Germany", done
//     "CA": "Canada", done
//     "MX": "Mexico", done
//     "FR": "France", done
//     "IT": "Italy", getting wrong data
//     "ES": "Spain",
//     "JP": "Japan",
//     "AU": "Australia"
//   };

//Prices are of their country local currency
//Some category id dont had any associated category string, so added category <id> as string to it

//sellerEmails, note, primarySubCategoryId, stateFromMerchant, whoIsRecord, legalName, disposition, qualifiedBrand, brandOwnership, singleBrand, BrandNameMatch, closeBrand, checkedForEmail, haveEmails, email, contactedDate, contacted, confirmedEmail, phone, confirmedPhone, lastUpdated, dateUpdated, primaryCategory, threeMonthGrowth, sixMonthGrowth, yearGrowth, sixMonthGrowthCount these columns are useless bcz they are either null or just false for every amazon seller thus we can skip or completed delete it if not needed
// "Primary Category", "Company pincode" column changed to "primaryCategoryIdString". "zipcode"
// "avgPrice", "numberReviewsLifetime", "numberReviews30Days", "street", "city", "lastSuspendedDate", "marketplace"(country code of scraped Data) added
// Also all column name changed to camel case(bcz thats how the actual data smartScout providing, so i didnt changed name format)