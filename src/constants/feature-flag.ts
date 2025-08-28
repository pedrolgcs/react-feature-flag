export const FEATURE_FLAGS = {
  GIT_HUB_SIGNIN: 'VITE_FEATURE_GIT_HUB_SIGNIN',
  BETA_USERS: 'VITE_FEATURE_BETA_USERS',
} as const

export type FeatureFlagKey = keyof typeof FEATURE_FLAGS
