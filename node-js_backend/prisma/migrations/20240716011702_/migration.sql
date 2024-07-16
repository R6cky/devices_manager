/*
  Warnings:

  - You are about to drop the column `description` on the `bluebird` table. All the data in the column will be lost.
  - You are about to drop the column `fix_date` on the `bluebird` table. All the data in the column will be lost.
  - You are about to drop the column `host_name` on the `bluebird` table. All the data in the column will be lost.
  - Added the required column `hostname` to the `bluebird` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner` to the `bluebird` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sector` to the `bluebird` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_bluebird" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serial_name" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "owner" TEXT NOT NULL
);
INSERT INTO "new_bluebird" ("id", "serial_name") SELECT "id", "serial_name" FROM "bluebird";
DROP TABLE "bluebird";
ALTER TABLE "new_bluebird" RENAME TO "bluebird";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
