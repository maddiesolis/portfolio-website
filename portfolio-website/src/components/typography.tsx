import { Heading, HeadingProps, Text, TextProps } from '@chakra-ui/react'
import { FC } from 'react'
import { ParentProps } from './props'

export const Title: FC<ParentProps> = ({ children }) => {
  return (
    <Heading textAlign={'center'} size={{ base: '2xl', md: '3xl', lg: '4xl' }} color={'purple.900'}>
      {children}
    </Heading>
  )
}

export const PageHeader: FC<ParentProps> = ({ children }) => {
  return (
    <Heading size={{ base: '2xl', md: '3xl', lg: '4xl' }} color={'purple.700'}>
      {children}
    </Heading>
  )
}

export const PageSubHeader: FC<ParentProps> = ({ children }) => {
  return (
    <Heading fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }} color={'gray.800'}>
      {children}
    </Heading>
  )
}

export const SectionHeader: FC<ParentProps | HeadingProps> = ({ children, ...rest }) => {
  return (
    <Heading fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} color={'gray.800'}>
      {children}
    </Heading>
  )
}

export const Paragraph: FC<ParentProps | TextProps> = ({ children, ...rest }) => {
  return (
    <Text fontSize={{ base: 'sm', md: 'md', lg: 'lg' }} color={'gray.800'} {...rest}>
      {children}
    </Text>
  )
}

export const DateRange: FC<ParentProps> = ({ children }) => {
  return (
    <Label textTransform={'uppercase'} color={'gray.600'}>
      {children}
    </Label>
  )
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
      pl={1}
      fontWeight={'semibold'}
      w="fit-content"
      color={'gray.700'}
    >
      {children}
    </Text>
  )
}

export const ToCItemText: FC<ParentProps> = ({ children }) => {
  return (
    <Paragraph
      fontWeight={'medium'}
      _hover={{
        textDecoration: 'underline',
        cursor: 'pointer',
      }}
    >
      {children}
    </Paragraph>
  )
}

export const Keyword: FC<ParentProps> = ({ children }) => {
  return (
    <Text fontSize={{ base: 'md', md: 'lg', lg: 'xl' }} color={'gray.600'}>
      {children}
    </Text>
  )
}
