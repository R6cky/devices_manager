-- CreateTable
CREATE TABLE "bluebird" (
    "id" TEXT NOT NULL,
    "serial_number" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "contact_number" TEXT NOT NULL,

    CONSTRAINT "bluebird_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "computer" (
    "id" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "operational_system" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "computer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tas" (
    "id" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "wifi_name" TEXT NOT NULL,

    CONSTRAINT "tas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "printer" (
    "id" TEXT NOT NULL,
    "hostname" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "brand_and_model" TEXT NOT NULL,
    "queue_name" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "toner_name" TEXT NOT NULL,

    CONSTRAINT "printer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "toner" (
    "id" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "toner_pkey" PRIMARY KEY ("id")
);
