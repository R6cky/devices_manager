/*
  Warnings:

  - You are about to drop the column `owner` on the `bluebird` table. All the data in the column will be lost.
  - Added the required column `contact_number` to the `bluebird` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_bluebird" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serial_number" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL
);
INSERT INTO "new_bluebird" ("hostname", "id", "sector", "serial_number") SELECT "hostname", "id", "sector", "serial_number" FROM "bluebird";
DROP TABLE "bluebird";
ALTER TABLE "new_bluebird" RENAME TO "bluebird";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
