'use client'

import { FC, useEffect } from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import React from 'react'
import { TbCircleLetterM } from 'react-icons/tb'
import '@/css/animations.css'

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
          className="slideInLeftSmall"
          aria-label="Logo link to home"
          onClick={() => {
            window.location.href = '/'
          }}
          bg="none"
          color={'gray.700'}
          _hover={{ color: 'gray.800' }}
          h={{ base: 6, md: 7, lg: 8 }}
        >
          <TbCircleLetterM style={{ width: '100%', height: '100%' }} />
        </IconButton>
      )}
    </Box>
  )
}
