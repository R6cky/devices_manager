import { prismaClient } from "../database/prismaClient.js";
import { schemaCreatePrinter } from "../utils/validators.js";

export const createPrinterService = async (data) => {
  const dataPrinter = schemaCreatePrinter.parse(data);
  return await prismaClient.printer.create({
    data: dataPrinter,
  });
};

export const deletePrinterService = async (id) => {
  return await prismaClient.printer.delete({
    where: {
      id: id,
    },
  });
};

export const getAllPrinterService = async () => {
  return await prismaClient.printer.findMany();
};

export const getPrinterByIdService = async (id) => {
  return await prismaClient.printer.findUnique({ where: { id: id } });
};

export const updatePrinterService = async (data, id) => {
  const dataPrinter = schemaCreatePrinter.parse(data);
  return await prismaClient.printer.update({
    data: dataPrinter,
    where: {
      id: id,
    },
  });
};
