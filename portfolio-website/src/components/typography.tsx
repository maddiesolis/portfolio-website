import { Heading, HStack, Text, TextProps } from '@chakra-ui/react'
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

export const PageHeader: FC<ParentProps> = ({ children }) => {
  return <Heading size={{ base: '2xl', md: '3xl', lg: '4xl' }}>{children}</Heading>
}

// Todo: Update any typography that uses textStyle
export const PageSubHeader: FC<ParentProps> = ({ children }) => {
  return <Heading textStyle={{ base: 'xl', md: '1xl', lg: '2xl' }}>{children}</Heading>
}

export const SectionHeader: FC<ParentProps> = ({ children }) => {
  return <Heading textStyle={{ base: 'sm', md: 'md', lg: 'lg' }}>{children}</Heading>
}

export const Paragraph: FC<ParentProps | TextProps> = ({ children, ...rest }) => {
  return (
    <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} {...rest}>
      {children}
    </Text>
  )
}

export const EducationDates: FC<ParentProps> = ({ children }) => {
  return <Paragraph color="gray.500">{children}</Paragraph>
}

export const Label: FC<ParentProps | TextProps> = ({ children, ...rest }) => {
  return (
    <Text fontSize={{ base: '2xs', md: 'xs', lg: 'sm' }} fontWeight="light" {...rest}>
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
  return <Paragraph>{children}</Paragraph>
}
