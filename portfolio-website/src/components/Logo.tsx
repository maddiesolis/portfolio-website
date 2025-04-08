'use client'

import { FC, useEffect } from 'react'
import Link from 'next/link'
import { keyframes } from '@emotion/react'
import { Box } from '@chakra-ui/react'
import React from 'react'

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-15%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Logo: FC = () => {
  const [showLogo, setShowLogo] = React.useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true)
    }, 2500) // 2.5 seconds delay
    return () => clearTimeout(timer)
  }, [])

  return (
    <Box>
      {showLogo && (
        <Box animation={`${slideIn} 0.5s ease-in-out`}>
          <Link href="/">Logo</Link>
        </Box>
      )}
    </Box>
  )
}
