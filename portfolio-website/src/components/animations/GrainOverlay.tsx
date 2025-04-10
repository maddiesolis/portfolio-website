import { Box } from '@chakra-ui/react'

export const AnimatedGrainOverlay = () => {
  return (
    <Box position="absolute" inset={0} pointerEvents="none" zIndex={0}>
      <svg width="100%" height="100%">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch">
            <animate attributeName="seed" from="0" to="100" dur="10s" repeatCount="indefinite" />
          </feTurbulence>
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" opacity="0.35" fill="white" />
      </svg>
    </Box>
  )
}
