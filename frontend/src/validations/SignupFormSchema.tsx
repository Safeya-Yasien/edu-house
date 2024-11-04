import { z } from "zod";

export const SignupFormSchema = z
  .object({
    first_name: z.string().min(1, { message: "First Name is required" }),
    last_name: z.string().min(1, { message: "Last Name is required" }),
    email: z
      .string()
      .min(1, { message: "Email is required " })
      .email({ message: "Not a valid email" }),
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
     ,
    confirm_password: z.string(),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export type TSignupForm = z.infer<typeof SignupFormSchema>;
