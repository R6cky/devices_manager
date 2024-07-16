/*
  Warnings:

  - Added the required column `sector` to the `printer` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_printer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hostname" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "brand_and_model" TEXT NOT NULL,
    "queue_name" TEXT NOT NULL,
    "sector" TEXT NOT NULL
);
INSERT INTO "new_printer" ("brand_and_model", "hostname", "id", "ip", "queue_name") SELECT "brand_and_model", "hostname", "id", "ip", "queue_name" FROM "printer";
DROP TABLE "printer";
ALTER TABLE "new_printer" RENAME TO "printer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
