import { Heading, HeadingProps, Text, TextProps } from '@chakra-ui/react'
import { FC } from 'react'
import { ParentProps } from './props'

export const Title: FC<ParentProps> = ({ children }) => {
  return (
    <Heading
      textAlign={'center'}
      size={{ base: '2xl', md: '3xl', lg: '4xl' }}
      lineHeight={1}
      color={'text.title.default'}
    >
      {children}
    </Heading>
  )
}

export const PageHeader: FC<ParentProps> = ({ children }) => {
  return (
    <Heading size={{ base: '2xl', md: '3xl', lg: '4xl' }} color={'text.header.default'}>
      {children}
    </Heading>
  )
}

export const PageSubHeader: FC<ParentProps | HeadingProps> = ({ children, ...rest }) => {
  return (
    <Heading
      fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}
      color={'text.subheader.default'}
      {...rest}
    >
      {children}
    </Heading>
  )
}

export const SectionHeader: FC<ParentProps | HeadingProps> = ({ children, ...rest }) => {
  return (
    <Heading
      fontSize={{ base: 'md', md: 'lg', lg: 'xl' }}
      lineHeight={1.4}
      color={'text.sectionheader.default'}
      {...rest}
    >
      {children}
    </Heading>
  )
}

export const Paragraph: FC<ParentProps | TextProps> = ({ children, ...rest }) => {
  return (
    <Text
      fontSize={{ base: 'sm', md: 'md', lg: 'lg' }}
      fontWeight={500}
      color={'text.body.default'}
      {...rest}
    >
      {children}
    </Text>
  )
}

export const DateRange: FC<ParentProps> = ({ children }) => {
  return (
    <Label textTransform={'uppercase'} textAlign={'start'} color={'text.subtle.default'}>
      {children}
    </Label>
  )
}

export const Label: FC<ParentProps | TextProps> = ({ children, ...rest }) => {
  return (
    <Text
      fontSize={{ base: '2xs', md: 'xs', lg: 'sm' }}
      fontWeight={500}
      textAlign={'center'}
      color={'text.body.default'}
      {...rest}
    >
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
      color={'text.nav.default'}
      _hover={{
        color: 'text.nav.hover',
      }}
    >
      {children}
    </Text>
  )
}

export const Keyword: FC<ParentProps> = ({ children }) => {
  return (
    <Heading
      fontSize={{ base: 'md', md: 'lg', lg: '2xl' }}
      lineHeight={1}
      color={'text.keyword.default'}
      fontWeight={500}
      textAlign={'center'}
    >
      {children}
    </Heading>
  )
}
