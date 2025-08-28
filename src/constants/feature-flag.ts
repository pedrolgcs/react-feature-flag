export const FEATURE_FLAGS = {
  GIT_HUB_SIGNIN: 'VITE_FEATURE_GIT_HUB_SIGNIN',
} as const

export type FeatureFlagKey = keyof typeof FEATURE_FLAGS
