/*
  Warnings:

  - The `contactedDate` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `lastUpdated` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `dateUpdated` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `lastSuspendedDate` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `startedSellingDate` column on the `Seller` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Seller" DROP COLUMN "contactedDate",
ADD COLUMN     "contactedDate" TIMESTAMP(3),
DROP COLUMN "lastUpdated",
ADD COLUMN     "lastUpdated" TIMESTAMP(3),
DROP COLUMN "dateUpdated",
ADD COLUMN     "dateUpdated" TIMESTAMP(3),
DROP COLUMN "lastSuspendedDate",
ADD COLUMN     "lastSuspendedDate" TIMESTAMP(3),
DROP COLUMN "startedSellingDate",
ADD COLUMN     "startedSellingDate" TIMESTAMP(3);
