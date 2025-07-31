---

# SmartScout Scraper - Usage Guide

## 1. Setup

After cloning the repository, create a `.env` file in the root directory and add the following environment variables:

```env
BEARER_TOKEN=your_token_here  # Do NOT include the 'Bearer' keyword
DATABASE_URL=your_database_url_here
```

---

## 2. Configure Script for Your Target Marketplace

Open the `smartScoutv2` script and update the `CONFIG` object at the top of the file to match the marketplace you want to scrape:

```js
const CONFIG = {
  marketplaceCode: "AU", // Supported values: US, UK, DE, CA, MX, FR, IT, ES, JP, AU, IN
  totalRows: 59010,      // Total rows to scrape per region
  batchSize: 10000,      // Number of records per API request
  delayBetweenRequests: 1000 // Delay (in ms) between requests
};
```

Marketplace row count reference:

* US: 2,105,983
* UK: 554,691
* CA: 623,356
* MX: 1,240
* DE: 334,602
* FR: 268,287
* IT: 63
* ES: 236,754
* JP: 215,953
* AU: 59,001
* IN: 275,539

To scrape from a specific row instead of the beginning, update the `startRow` variable at **line 48** of the script.

---

## 3. Run the Scraper

Once the configuration is updated, run the `smartScoutv2` script. It will scrape all rows up to the number defined in `totalRows`.

---

## 4. (Optional) Update Category Mapping

If you wish to add `primaryCategoryID` via string matching, run the `updateCat.js` script located in the `utils` folder.

Before running it, ensure you specify the target `marketplace` or `region` inside the script.

---

## 5. Export Data to CSV

To export the scraped data to a CSV file:

1. Open `getCSV.js` in the `utils` folder.
2. Update its config section with the desired `marketplace` or `region`.
3. Run the script to download the data in CSV format. The data will be split into manageable chunks for easier handling.

---

Let me know if you want to add installation steps, database setup, or a command reference section as well.
