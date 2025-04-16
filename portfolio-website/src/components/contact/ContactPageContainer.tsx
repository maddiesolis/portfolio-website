'use client'

import { VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { ParentProps } from '../props'
import '@/css/animations.css'

export const ContactPageContainer: FC<ParentProps> = ({ children }) => {
  return (
    <VStack className="fadeIn" gap={{ base: 5, md: 6, lg: 7 }}>
      {children}
    </VStack>
  )
}
