const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function analyzeSellersData() {
  try {
    // Get the total number of sellers
    const totalSellers = await prisma.seller.count();
    console.log(`Total sellers in database: ${totalSellers}`);

    // Define fields to check
    const stringFields = [
      'sellerEmails',
      'note',
      'primarySubCategoryId',
      'stateFromMerchant',
      'whoIsRecord',
      'legalName',
      'disposition',
      'brandOwnership',
      'email',
      'confirmedEmail',
      'phone',
      'confirmedPhone',
      'primaryCategory'
    ];

    const booleanFields = [
      'singleBrand',
      'brandNameMatch', // Note: schema has brandNameMatch, not BrandNameMatch
      'closeBrand',
      'checkedForEmails',
      'haveEmails',
      'contacted',
      'isSuspended'
    ];

    const dateFields = [
      'contactedDate',
      'lastUpdated',
      'dateUpdated'
    ];

    const numericFields = [
      'qualifiedBrands', // In schema this is an Int
      'threeMonthGrowth',
      'sixMonthGrowth',
      'yearGrowth',
      'sixMonthGrowthCount'
    ];

    const results = {};

    // Count not null string fields
    for (const fieldName of stringFields) {
      const count = await prisma.seller.count({
        where: {
          [fieldName]: { not: null }
        }
      });
      results[fieldName] = {
        notNullCount: count,
        percentage: ((count / totalSellers) * 100).toFixed(2) + '%'
      };
    }

    // Count true boolean fields
    for (const fieldName of booleanFields) {
      const count = await prisma.seller.count({
        where: {
          [fieldName]: true
        }
      });
      results[fieldName] = {
        trueCount: count,
        percentage: ((count / totalSellers) * 100).toFixed(2) + '%'
      };
    }

    // Count not null date fields
    for (const fieldName of dateFields) {
      const count = await prisma.seller.count({
        where: {
          [fieldName]: { not: null }
        }
      });
      results[fieldName] = {
        notNullCount: count,
        percentage: ((count / totalSellers) * 100).toFixed(2) + '%'
      };
    }

    // Count not null numeric fields
    for (const fieldName of numericFields) {
      const count = await prisma.seller.count({
        where: {
          [fieldName]: { not: null }
        }
      });
      results[fieldName] = {
        notNullCount: count,
        percentage: ((count / totalSellers) * 100).toFixed(2) + '%'
      };
    }

    return { totalSellers, results };
  } catch (error) {
    console.error('Error analyzing sellers data:', error);
    return null;
  }
}

// Run the analysis
async function main() {
  console.time('Database Analysis');
  const analysis = await analyzeSellersData();
  console.timeEnd('Database Analysis');
  
  if (analysis) {
    console.log('\nAnalysis Results:');
    console.log('=================');
    console.log(`Total sellers: ${analysis.totalSellers}`);
    console.log('\nField statistics:');
    
    // Sort fields by percentage (descending)
    const sortedFields = Object.entries(analysis.results)
      .sort((a, b) => {
        const percentA = parseFloat(a[1].percentage);
        const percentB = parseFloat(b[1].percentage);
        return percentB - percentA;
      });
    
    // Display results in a table format
    console.table(
      sortedFields.reduce((acc, [field, stats]) => {
        acc[field] = stats;
        return acc;
      }, {})
    );
  }
  
  await prisma.$disconnect();
}

main();