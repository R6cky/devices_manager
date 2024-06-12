-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "BlueBird" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serial_name" TEXT NOT NULL,
    "host_name" TEXT NOT NULL,
    "fix_date" DATETIME NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Computer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hostname" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "operational_system" TEXT NOT NULL,
    "type" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Tas" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hostname" TEXT NOT NULL,
    "wifi_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Print" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hostname" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "brand_and_model" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Toner" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "model" TEXT NOT NULL,
    "in_out" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
