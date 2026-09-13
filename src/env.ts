import { z } from 'zod'

const envSchema = z.object({
  NEXT_PUBLIC_MAIN_URL: z.url(),
})

// As variáveis precisam ser referenciadas estaticamente para o Next conseguir
// inlinar o valor no bundle do cliente.
export const env = envSchema.parse({
  NEXT_PUBLIC_MAIN_URL: process.env.NEXT_PUBLIC_MAIN_URL,
})
