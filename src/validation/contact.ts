import { z } from "zod";

export const validationSendContactForm = z.object({
  name: z.string().min(1),
  email: z.string().min(1).email(),
  message: z.string().optional(),
});

export type TSendContactFormSchema = z.infer<typeof validationSendContactForm>;
