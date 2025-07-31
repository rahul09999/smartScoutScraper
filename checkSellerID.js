const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

/**
 * Searches for a seller by amazonSellerId and returns data in JSON format
 * @param {string} amazonSellerId - The Amazon Seller ID to search for
 * @returns {Promise<object|null>} - Seller data in JSON format or null if not found
 */
async function findSellersByMarketplaceAndSellerId(marketplace, sellerId) {
    try {
        // Check if sellers exist in the specified marketplace with the given sellerId
        const sellers = await prisma.seller.findMany({
            where: {
                marketplace: marketplace,
                amazonSellerId: sellerId
            }
        });

        if (sellers.length > 0) {
            console.log(`Sellers found in marketplace: ${marketplace} with sellerId: ${sellerId}`);
            console.log(JSON.stringify(sellers, null, 2)); // Pretty print JSON
            console.log(`Number of sellers found: ${sellers.length}`);
            return sellers;
        } else {
            console.log(`No sellers found in marketplace: ${marketplace} with sellerId: ${sellerId}`);
            return [];
        }
    } catch (error) {
        console.error('Error searching for sellers:', error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

// CHANGE THESE VALUES TO THE MARKETPLACE AND SELLER ID YOU WANT TO LOOK UP
const marketplace = "US"; // Replace with the marketplace you want to search for
const sellerId = "A2E3Z9JHC7CKZ4"; // Replace with the Amazon Seller ID you want to search for

// Execute the search
findSellersByMarketplaceAndSellerId(marketplace, sellerId)
    .catch(error => {
        console.error('Script execution failed:', error);
        process.exit(1);
    });

// CHANGE THIS VALUE TO THE SELLER ID YOU WANT TO LOOK UP
// const sellerId = "A1XV2Z0Y991MC3"; // Replace with the Amazon Seller ID you want to search for

// // Execute the search
// findSellerById(sellerId)
//   .catch(error => {
//     console.error('Script execution failed:', error);
//     process.exit(1);
//   });