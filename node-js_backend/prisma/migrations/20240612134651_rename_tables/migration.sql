/*
  Warnings:

  - You are about to drop the `BlueBird` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Computer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Print` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Tas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Toner` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "BlueBird";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Computer";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Print";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Tas";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Toner";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "user" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "bluebird" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serial_name" TEXT NOT NULL,
    "host_name" TEXT NOT NULL,
    "fix_date" DATETIME NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "computer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hostname" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "operational_system" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hostname" TEXT NOT NULL,
    "wifi_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "print" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hostname" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "brand_and_model" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "toner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "model" TEXT NOT NULL,
    "in_out" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");
