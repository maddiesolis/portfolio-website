import { FC } from 'react'
import { KeywordsProps } from '../props'
import { HStack } from '@chakra-ui/react'
import { Keyword } from '../typography'

// Todo: Make this a generic component, can be used for TOC
export const Keywords: FC<KeywordsProps> = ({ keywords }) => {
  const gap = {
    base: 2,
    md: 3,
    lg: 4,
  }
  return (
    <HStack gap={gap} justify={'center'}>
      {keywords.map((keyword, index) => (
        <HStack key={index} gap={gap}>
          <Keyword>{keyword}</Keyword>
          {index < keywords.length - 1 && <Keyword>•</Keyword>}
        </HStack>
      ))}
    </HStack>
  )
}
