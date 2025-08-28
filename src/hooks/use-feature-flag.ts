import { FEATURE_FLAGS, type FeatureFlagKey } from '../constants/feature-flag'
import { useAuth } from '../contexts/auth-context'
import { env } from '../env'

export function useFeatureFlag(feature: FeatureFlagKey): boolean {
  const { currentUser } = useAuth()
  const userGroup = currentUser?.group

  const envKey = FEATURE_FLAGS[feature]
  const flag = env[envKey]

  if (!flag.enabled) return false

  if (userGroup && flag.groups[userGroup] !== undefined) {
    return flag.groups[userGroup]
  }

  return flag.enabled
}
