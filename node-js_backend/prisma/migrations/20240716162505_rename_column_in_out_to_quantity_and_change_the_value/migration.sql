/*
  Warnings:

  - You are about to drop the column `in_out` on the `toner` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_toner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "model" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0
);
INSERT INTO "new_toner" ("id", "model") SELECT "id", "model" FROM "toner";
DROP TABLE "toner";
ALTER TABLE "new_toner" RENAME TO "toner";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
