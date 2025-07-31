/*
  Warnings:

  - The `collectionExcluded` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `qualifiedBrands` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `singleBrand` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `brandNameMatch` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `closeBrand` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `checkedForEmails` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `haveEmails` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `contacted` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `isSuspended` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "collectionExcluded",
ADD COLUMN     "collectionExcluded" BOOLEAN,
DROP COLUMN "qualifiedBrands",
ADD COLUMN     "qualifiedBrands" INTEGER,
DROP COLUMN "singleBrand",
ADD COLUMN     "singleBrand" BOOLEAN,
DROP COLUMN "brandNameMatch",
ADD COLUMN     "brandNameMatch" BOOLEAN,
DROP COLUMN "closeBrand",
ADD COLUMN     "closeBrand" BOOLEAN,
DROP COLUMN "checkedForEmails",
ADD COLUMN     "checkedForEmails" BOOLEAN,
DROP COLUMN "haveEmails",
ADD COLUMN     "haveEmails" BOOLEAN,
DROP COLUMN "contacted",
ADD COLUMN     "contacted" BOOLEAN,
DROP COLUMN "isSuspended",
ADD COLUMN     "isSuspended" BOOLEAN;
