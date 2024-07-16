/*
  Warnings:

  - Added the required column `queue_name` to the `print` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_print" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hostname" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "brand_and_model" TEXT NOT NULL,
    "queue_name" TEXT NOT NULL
);
INSERT INTO "new_print" ("brand_and_model", "hostname", "id", "ip") SELECT "brand_and_model", "hostname", "id", "ip" FROM "print";
DROP TABLE "print";
ALTER TABLE "new_print" RENAME TO "print";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
