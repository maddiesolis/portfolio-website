'use client'

import { FC, useEffect } from 'react'
import { HStack } from '@chakra-ui/react'
import React from 'react'
import { KeywordsProps } from './props'
import { Keyword } from './typography'
import '@/css/animations.css'

export const Keywords: FC<KeywordsProps> = ({ keywords }) => {
  const [showKeywords, setShowKeywords] = React.useState(false)

  // Todo: Is there a way around using setTimeout? It would be best to not have to use CSR
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
            className="slideInLeftSmall"
            gap={gap}
            animationDelay={`${index * 0.4}s`}
            animationFillMode={'both'}
          >
            <Keyword>{keyword}</Keyword>
            {index < keywords.length - 1 && <Keyword>•</Keyword>}
          </HStack>
        ))}
    </HStack>
  )
}
