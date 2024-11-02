import { z } from "zod";

export const schemaCreateAndUpdateBluebids = z.object({
  serial_number: z.string().min(5).max(15),
  hostname: z.string().min(5).max(10),
  sector: z.string().min(3),
  contact_number: z.string().min(8).max(11),
});

export const schemaRegisterAndLogin = z.object({
  email: z.string().email().min(8),
  password: z.string().min(6).max(15),
});
