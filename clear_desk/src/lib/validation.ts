import { z } from "zod";

export const complaintFormSchema = z.object({
  category: z.string().nonempty("Category is required."),
  title: z
    .string()
    .nonempty("Title is required.")
    .max(100, "Title must not exceed 100 characters."),
  description: z
    .string()
    .nonempty("Description is required.")
    .max(200, "Description must not exceed 200 words."),
  images: z
    .array(z.instanceof(File))
    .max(5, "You can upload a maximum of 5 images.")
    .optional(),
});
