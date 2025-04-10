'use client'

import { Box } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import { FC } from 'react'

const gradientAnimation = keyframes`
  0% {
    background-position: 0% 20%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 50% 70%;
  }
  100% {
    background-position: 0% 20%;
  }
`

export const AnimatedBackground: FC = () => {
  return (
    <Box position="fixed" inset={0} overflow="hidden" zIndex={-1}>
      <Box
        position="absolute"
        inset={0}
        bg="hsla(223,100%,88%,1)"
        backgroundImage={`
          radial-gradient(at 99% 98%, hsla(186,37%,65%,1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(277,30%,80%,1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, hsla(185,27%,67%,1) 0px, transparent 50%),
          radial-gradient(at 51% 0%, hsla(206,23%,73%,1) 0px, transparent 50%);
        `}
        backgroundSize="200% 200%"
        animation={`${gradientAnimation} 13s ease infinite`}
      />
    </Box>
  )
}
