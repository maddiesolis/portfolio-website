import { Heading, HStack, Text } from '@chakra-ui/react'
import { FC } from 'react'

interface TypographyProps {
  children: React.ReactNode
}

interface KeywordsProps {
  keywords: string[]
}

export const PageHeader: FC<TypographyProps> = ({ children }) => {
  return (
    <Heading textStyle={{ base: '3xl', md: '4xl', lg: '5xl' }} bg="brand.primary.100">
      {children}
    </Heading>
  )
}

export const PageSubHeader: FC<TypographyProps> = ({ children }) => {
  return (
    <Heading textStyle={{ base: '2xl', md: '3xl', lg: '4xl' }} bg="brand.accent.100">
      {children}
    </Heading>
  )
}

export const SectionHeader: FC<TypographyProps> = ({ children }) => {
  return <Heading textStyle={{ base: 'xl', md: '2xl', lg: '3xl' }}>{children}</Heading>
}

export const Paragraph: FC<TypographyProps> = ({ children }) => {
  return (
    <Text textStyle={{ base: 'md', md: 'lg', lg: 'xl' }} bg="brand.accent.100">
      {children}
    </Text>
  )
}

export const Label: FC<TypographyProps> = ({ children }) => {
  return (
    <Text textStyle={{ base: 'sm', md: 'md', lg: 'lg' }} bg="brand.primary.100">
      {children}
    </Text>
  )
}

export const NavItem: FC<TypographyProps> = ({ children }) => {
  return (
    <Text textAlign={'right'} textStyle={{ base: 'lg', md: 'xl', lg: '2xl' }}>
      {children}
    </Text>
  )
}

export const ToCItem: FC<TypographyProps> = ({ children }) => {
  return (
    <Text textStyle={{ base: 'lg', md: 'xl', lg: '2xl' }} bg="brand.accent.100">
      {children}
    </Text>
  )
}

export const Keywords: FC<KeywordsProps> = ({ keywords }) => {
  const gap = {
    base: 4,
    md: 8,
    lg: 12,
  }
  return (
    <HStack gap={gap} justify={'center'}>
      {keywords.map((keyword, index) => (
        <HStack key={index} gap={gap}>
          <SectionHeader>{keyword}</SectionHeader>
          {index < keywords.length - 1 && <SectionHeader>•</SectionHeader>}
        </HStack>
      ))}
    </HStack>
  )
}
