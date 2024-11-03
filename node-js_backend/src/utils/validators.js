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

export const schemaUpdateBluebids = z.object({
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

export const schemaCreateAndUpdateTas = z.object({
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
  // Outros campos específicos para TAS, se houver
});

// Schema para validação de TONER
export const schemaCreateAndUpdateToner = z.object({
  model: z
    .string("Este campo aceita somente texto.")
    .min(3, "O valor mínimo é 3 caracteres.")
    .max(20, "O valor máximo é 20 caracteres"),
  quantity: z
    .number("O valor deve ser um número")
    .int("O valor deve ser um número inteiro")
    .min(0, "O valor mínimo é 0"),
});
