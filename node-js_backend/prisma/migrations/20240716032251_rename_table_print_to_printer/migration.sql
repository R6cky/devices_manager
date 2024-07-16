/*
  Warnings:

  - You are about to drop the `print` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "print";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "printer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hostname" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "brand_and_model" TEXT NOT NULL,
    "queue_name" TEXT NOT NULL
);
