import { z } from 'zod'

const featureFlagSchema = z.object({
  enabled: z.boolean(),
  groups: z.record(z.string(), z.boolean()),
})

const envSchema = z.object({
  VITE_FEATURE_GIT_HUB_SIGNIN: z
    .string()
    .transform((val) => featureFlagSchema.parse(JSON.parse(val))),
})

const _env = envSchema.safeParse(import.meta.env)

if (!_env.success) {
  console.error('❌ Invalid environment variables', _env.error.format())
  throw new Error('Invalid environment variables')
}

export const env = _env.data
