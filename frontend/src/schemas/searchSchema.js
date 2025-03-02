import { z } from "zod";

export const searchSchema = z.object({
  title: z
    .string()
    .nonempty({ message: "O campo de pesquisa está vazio" })
    .refine((value) => !/^\s*$/.test(value), {
      message: "A pesquisa não pode conter somente espaço",
    }),
});