import type { FeatureFlagKey } from '../constants/feature-flag'
import { useFeatureFlag } from '../hooks/use-feature-flag'

type FeatureFlagProps = {
  feature: FeatureFlagKey
  fallback?: React.ReactNode
  children?: React.ReactNode
}

export function FeatureFlag({ feature, fallback, children }: FeatureFlagProps) {
  const enabled = useFeatureFlag(feature)

  if (!enabled) {
    return <>{fallback || null}</>
  }

  return <>{children}</>
}
