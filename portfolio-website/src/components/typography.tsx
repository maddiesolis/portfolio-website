import { Heading, HStack, Text } from '@chakra-ui/react'
import { FC } from 'react'
import { KeywordsProps, ParentProps } from './props'

export const Title: FC<ParentProps> = ({ children }) => {
  return (
    <Heading textAlign={'center'} size={{ base: '2xl', md: '3xl', lg: '4xl' }}>
      {children}
    </Heading>
  )
}

const Keyword: FC<ParentProps> = ({ children }) => {
  return <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}>{children}</Text>
}

export const Keywords: FC<KeywordsProps> = ({ keywords }) => {
  const gap = {
    base: 2,
    md: 3,
    lg: 4,
  }
  return (
    <HStack data-label="keywords" gap={gap} justify={'center'}>
      {keywords.map((keyword, index) => (
        <HStack key={index} gap={gap}>
          <Keyword>{keyword}</Keyword>
          {index < keywords.length - 1 && <Keyword>•</Keyword>}
        </HStack>
      ))}
    </HStack>
  )
}

export const PageHeader: FC<ParentProps> = ({ children }) => {
  return (
    <Heading textStyle={{ base: '3xl', md: '4xl', lg: '5xl' }} bg="brand.primary.100">
      {children}
    </Heading>
  )
}

export const PageSubHeader: FC<ParentProps> = ({ children }) => {
  return (
    <Heading textStyle={{ base: '2xl', md: '3xl', lg: '4xl' }} bg="brand.accent.100">
      {children}
    </Heading>
  )
}

export const SectionHeader: FC<ParentProps> = ({ children }) => {
  return <Heading textStyle={{ base: 'xl', md: '2xl', lg: '3xl' }}>{children}</Heading>
}

export const Paragraph: FC<ParentProps> = ({ children }) => {
  return <Text textStyle={{ base: 'md', md: 'lg', lg: 'xl' }}>{children}</Text>
}

export const Label: FC<ParentProps> = ({ children }) => {
  return (
    <Text textStyle={{ base: 'sm', md: 'md', lg: 'lg' }} bg="brand.primary.100">
      {children}
    </Text>
  )
}

export const NavItemText: FC<ParentProps> = ({ children }) => {
  return (
    <Text
      textAlign={'right'}
      fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
      lineHeight={1.2}
      fontWeight={'semibold'}
    >
      {children}
    </Text>
  )
}

export const ToCItem: FC<ParentProps> = ({ children }) => {
  return (
    <Text textStyle={{ base: 'lg', md: 'xl', lg: '2xl' }} bg="brand.accent.100">
      {children}
    </Text>
  )
}
