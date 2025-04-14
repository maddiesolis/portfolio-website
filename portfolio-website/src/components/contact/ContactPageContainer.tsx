'use client'

import { VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { ParentProps } from '../props'
import { keyframes } from '@emotion/react'

const appear = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`
export const ContactPageContainer: FC<ParentProps> = ({ children }) => {
  return (
    <VStack gap={{ base: 5, md: 6, lg: 7 }} animation={`${appear} 0.4s ease-in-out`}>
      {children}
    </VStack>
  )
}
