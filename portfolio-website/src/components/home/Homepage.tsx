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
    <VStack gap={10}>
      <Image
        src="/images/desk.png"
        alt="desk illustration"
        borderRadius={'sm'}
        w="full"
        animation={`${fadeIn} 0.5s ease-in-out`}
        mt={4}
        width={{ base: '500px', md: '750px', lg: '800px' }}
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
