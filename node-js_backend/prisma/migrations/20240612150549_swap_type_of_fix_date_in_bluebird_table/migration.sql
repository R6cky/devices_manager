-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_bluebird" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serial_name" TEXT NOT NULL,
    "host_name" TEXT NOT NULL,
    "fix_date" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
INSERT INTO "new_bluebird" ("description", "fix_date", "host_name", "id", "serial_name") SELECT "description", "fix_date", "host_name", "id", "serial_name" FROM "bluebird";
DROP TABLE "bluebird";
ALTER TABLE "new_bluebird" RENAME TO "bluebird";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
