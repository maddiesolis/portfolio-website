'use client'

import { Box, Image, VStack } from '@chakra-ui/react'
import { Title } from '../typography'
import { Keywords } from './Keywords'
import { keyframes } from '@emotion/react'
import React from 'react'

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

export const Homepage: React.FC = () => {
  return (
    <VStack gap={{ base: 2, md: 6, lg: 10 }}>
      <Image
        src="/svg/desk.svg"
        alt="homepage svg"
        animation={`${fadeIn} 0.5s ease-in-out`}
        mt={4}
        w={'full'}
      />
      <VStack>
        <Box animation={`${fadeIn} 0.5s ease-in-out`}>
          <Title>Madeline Solis de Ovando</Title>
        </Box>
        <Keywords keywords={['Developer', 'Designer', 'Artist']} />
      </VStack>
    </VStack>
  )
}
