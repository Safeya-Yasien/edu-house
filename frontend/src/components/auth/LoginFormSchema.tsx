import { z } from "zod";

export const LoginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required " })
    .email({ message: "Not a valid email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    ,
});

export type TLoginForm = z.infer<typeof LoginFormSchema>;
