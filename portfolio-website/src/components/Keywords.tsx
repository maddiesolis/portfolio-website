'use client'

import { FC, useEffect } from 'react'
import { HStack } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import React from 'react'
import { KeywordsProps } from './props'
import { Keyword } from './typography'

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

export const Keywords: FC<KeywordsProps> = ({ keywords }) => {
  const [showKeywords, setShowKeywords] = React.useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowKeywords(true)
    }, 1000) // 1 second delay
    return () => clearTimeout(timer)
  }, [])

  const gap = {
    base: 2,
    md: 3,
    lg: 4,
  }
  return (
    <HStack gap={gap} justify={'center'} h={{ base: 5, md: 6, lg: 7 }}>
      {showKeywords &&
        keywords.map((keyword, index) => (
          <HStack
            key={index}
            gap={gap}
            animation={`${slideIn} 0.5s ease-in-out ${index * 0.4}s both`}
          >
            <Keyword>{keyword}</Keyword>
            {index < keywords.length - 1 && <Keyword>•</Keyword>}
          </HStack>
        ))}
    </HStack>
  )
}
