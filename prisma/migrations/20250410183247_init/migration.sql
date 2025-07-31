-- CreateTable
CREATE TABLE "Seller" (
    "id" SERIAL NOT NULL,
    "sellerEmails" TEXT,
    "note" TEXT,
    "collectionExcluded" TEXT,
    "name" TEXT,
    "primaryCategoryId" INTEGER,
    "primaryCategoryIdString" TEXT,
    "primarySubCategoryId" INTEGER,
    "stateFromMerchant" TEXT,
    "whoIsRecord" TEXT,
    "legalName" TEXT,
    "disposition" TEXT,
    "marketplace" TEXT NOT NULL,
    "qualifiedBrands" TEXT,
    "brandOwnership" TEXT,
    "singleBrand" TEXT,
    "brandNameMatch" TEXT,
    "closeBrand" TEXT,
    "checkedForEmails" TEXT,
    "haveEmails" TEXT,
    "email" TEXT,
    "contactedDate" TEXT,
    "contacted" TEXT,
    "profilingStatus" TEXT,
    "confirmedEmail" TEXT,
    "phone" TEXT,
    "confirmedPhone" TEXT,
    "confirmedRealWorldName" TEXT,
    "lastUpdated" TEXT,
    "dateUpdated" TEXT,
    "primaryCategory" TEXT,
    "primarySubCategory" TEXT,
    "businessName" TEXT,
    "amazonSellerId" TEXT,
    "estimateSales" DOUBLE PRECISION,
    "avgPrice" DOUBLE PRECISION,
    "percentFba" DOUBLE PRECISION,
    "numberReviewsLifetime" INTEGER,
    "numberReviews30Days" INTEGER,
    "numberWinningBrands" INTEGER,
    "numberAsins" INTEGER,
    "numberTopAsins" INTEGER,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "country" TEXT,
    "zipCode" TEXT,
    "numBrands1000" INTEGER,
    "moMGrowth" DOUBLE PRECISION,
    "threeMonthGrowth" DOUBLE PRECISION,
    "sixMonthGrowth" DOUBLE PRECISION,
    "yearGrowth" DOUBLE PRECISION,
    "moMGrowthCount" INTEGER,
    "sixMonthGrowthCount" INTEGER,
    "isSuspended" TEXT,
    "lastSuspendedDate" TEXT,
    "startedSellingDate" TEXT,
    "dateScraped" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Seller_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CategoryMapping" (
    "id" SERIAL NOT NULL,
    "marketplace" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "categoryString" TEXT NOT NULL,

    CONSTRAINT "CategoryMapping_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Seller_marketplace_idx" ON "Seller"("marketplace");

-- CreateIndex
CREATE INDEX "Seller_primaryCategoryId_idx" ON "Seller"("primaryCategoryId");

-- CreateIndex
CREATE UNIQUE INDEX "CategoryMapping_marketplace_categoryId_key" ON "CategoryMapping"("marketplace", "categoryId");
