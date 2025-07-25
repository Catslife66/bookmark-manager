import { z } from "zod";

export const bookmarkSchema = z.object({
  title: z.string().min(1, "Title is required"),
  url: z.string().url("Must be a valid URL"),
  notes: z.string().optional(),
  clerkId: z.string().min(1, "Missing user ID"),
});
