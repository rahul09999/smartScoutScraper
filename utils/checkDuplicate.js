const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function checkDuplicateAmazonSellerIDs(marketplaceName) {
    try {
        // Get all sellers with their amazonSellerID from the specified marketplace
        const sellers = await prisma.seller.findMany({
            where: {
                marketplace: marketplaceName,
                amazonSellerId: {
                    not: null
                }
            },
            select: {
                amazonSellerId: true
            }
        });

        const sellerIDCount = {};
        let duplicateCount = 0;
        
        // Count occurrences of each seller ID
        sellers.forEach(seller => {
            const sellerID = seller.amazonSellerId;
            sellerIDCount[sellerID] = (sellerIDCount[sellerID] || 0) + 1;
        });
        
        // Count how many seller IDs appear more than once
        Object.values(sellerIDCount).forEach(count => {
            if (count > 1) {
                duplicateCount++;
            }
        });
        
        return {
            totalDuplicates: duplicateCount,
            duplicateDetails: Object.entries(sellerIDCount)
                .filter(([id, count]) => count > 1)
                .map(([id, count]) => ({ sellerID: id, occurrences: count }))
        };
    } catch (error) {
        console.error('Error checking duplicate seller IDs:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

// Test the function and log the data
async function testFunction() {
    try {
        const result = await checkDuplicateAmazonSellerIDs('AU');
        console.log('Duplicate check result:', result);
    } catch (error) {
        console.error('Test error:', error);
    }
}

// Uncomment the line below to run the test
testFunction();

module.exports = checkDuplicateAmazonSellerIDs;