import { z } from "zod";

export const schemaCreateBluebids = z.object({
  serial_number: z.string("Este campo aceita somente texto.").min(3),
  hostname: z.string("Este campo aceita somente texto."),
  sector: z.string(" O valor deve ser texto"),
  contact_number: z.string(" O valor deve ser texto"),
});

export const schemaRegisterAndLogin = z.object({
  email: z.string("O valor deve ser texto").email("Digite um email válido"),
  password: z.string("O valor deve ser texto"),
});

export const schemaCreateTas = z.object({
  hostname: z.string("O valor deve ser texto"),
  wifi_name: z.string("O valor deve ser texto"),
});

export const schemaCreateToner = z.object({
  model: z.string("O valor deve ser texto"),
  quantity: z.number("O valor deve ser número"),
});

export const schemaCreatePrinter = z.object({
  hostname: z.string("O valor deve ser texto."),
  ip: z.string("O valor deve ser texto."),
  brand_and_model: z.string("O valor deve ser texto."),
  queue_name: z.string("O valor deve ser texto."),
  sector: z.string("O valor deve ser texto."),
  toner_name: z.string("O valor deve ser texto."),
});

export const schemaCreateComputer = z.object({
  hostname: z.string("O valor deve ser texto"),
  ip: z.string("O valor deve ser texto"),
  sector: z.string("O valor deve ser texto"),
  operational_system: z.string(""),
  type: z.string("O valor deve ser texto"),
});
