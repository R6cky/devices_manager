import { z } from "zod";

export const schemaCreateBluebids = z.object({
  serial_number: z
    .string("Este campo aceita somente texto.")
    .min(5, "O valor mínimo é 5 caracteres.")
    .max(15, "O valor máximo é 15 caracteres"),
  hostname: z
    .string()
    .min(5, "O valor mínimo é 5 caracteres")
    .max(10, "O valor máximo é 10 caracteres"),
  sector: z
    .string(" O valor deve ser texto")
    .min(3, "O valor mínimo é 3 caracteres"),
  contact_number: z
    .string(" O valor deve ser texto")
    .min(8, "O valor mínimo é 8 caracteres")
    .max(11, "O valor máximo é 11 caracteres"),
});

export const schemaRegisterAndLogin = z.object({
  email: z
    .string("O valor deve ser texto")
    .email("Digite um email válido")
    .min(8, "O valor mínimo é 8 caracteres"),
  password: z
    .string("O valor deve ser texto")
    .min(6, "O valor mínimo é 6 caracteres")
    .max(15, "O valor máximo é 15 caracteres"),
});

export const schemaCreateTas = z.object({
  hostname: z.string("O valor deve ser texto"),
  wifi_name: schemaCreateBluebids.string("O valor deve ser texto"),
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
  hosthname: z.string("O valor deve ser texto"),
  ip: z.string("O valor deve ser texto"),
  sector: z.string("O valor deve ser texto"),
  operational_system: z.string(""),
  type: z.string("O valor deve ser texto"),
});
