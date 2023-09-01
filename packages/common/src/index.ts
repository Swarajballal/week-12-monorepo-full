import { z } from "zod";

export const UserInput = z.object({
    email: z.string(),
    password: z.string()
})


export type userInputType = z.infer<typeof UserInput>