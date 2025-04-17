import { FC } from 'react'
import { HStack } from '@chakra-ui/react'
import React from 'react'
import { KeywordsProps } from './props'
import { Keyword } from './typography'
import '@/css/animations.css'

export const Keywords: FC<KeywordsProps> = ({ keywords }) => {
  const gap = {
    base: 2,
    md: 3,
    lg: 4,
  }
  return (
    <HStack gap={gap} justify={'center'} h={{ base: 5, md: 6, lg: 7 }}>
      {keywords.map((keyword, index) => (
        <HStack
          key={index}
          className="slideInLeftSmall"
          gap={gap}
          animationDelay={`${1 + index * 0.4}s`} // Start after 1 second, 0.4s between each
          animationFillMode={'both'}
        >
          <Keyword>{keyword}</Keyword>
          {index < keywords.length - 1 && <Keyword>•</Keyword>}
        </HStack>
      ))}
    </HStack>
  )
}
