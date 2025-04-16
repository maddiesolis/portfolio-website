'use client'

import { FC } from 'react'
import { Box, IconButton } from '@chakra-ui/react'
import React from 'react'
import { TbCircleLetterM } from 'react-icons/tb'
import '@/css/animations.css'

export const Logo: FC = () => {
  return (
    <Box className="slideInLeftSmall" animationDelay={`2.5s`} animationFillMode={'both'}>
      <IconButton
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
    </Box>
  )
}
