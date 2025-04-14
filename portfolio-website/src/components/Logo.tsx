'use client'

import { FC, useEffect } from 'react'
import { keyframes } from '@emotion/react'
import { Box, IconButton } from '@chakra-ui/react'
import React from 'react'
import { TbCircleLetterM, TbLetterM } from 'react-icons/tb'

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
        <IconButton
          aria-label="Logo link to home"
          onClick={() => {
            window.location.href = '/'
          }}
          bg="none"
          color={'gray.700'}
          _hover={{ color: 'gray.800' }}
          h={{ base: 6, md: 7, lg: 8 }}
          animation={`${slideIn} 0.5s ease-in-out`}
        >
          <TbCircleLetterM style={{ width: '100%', height: '100%' }} />
        </IconButton>
      )}
    </Box>
  )
}
