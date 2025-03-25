import { HStack, VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { NavItem, ToCItem } from './typography'
import Link from 'next/link'

interface LinkProps {
  label: string
  url: string
}

interface NavProps {
  links: LinkProps[]
}

export const GlobalNavMenu: FC<NavProps> = ({ links }) => {
  return (
    <VStack gap={4} align={'right'}>
      {links.map((link, index) => (
        <Link key={index} href={link.url}>
          <NavItem>{link.label}</NavItem>
        </Link>
      ))}
    </VStack>
  )
}

export const TableOfContents: FC<NavProps> = ({ links }) => {
  const gap = {
    base: 4,
    md: 8,
    lg: 12,
  }
  return (
    <HStack gap={gap} wrap={'wrap'}>
      {links.map((link, index) => (
        <HStack key={index} gap={gap}>
          <Link href={link.url}>
            <ToCItem>{link.label}</ToCItem>
          </Link>
          {index < links.length - 1 && <ToCItem>|</ToCItem>}
        </HStack>
      ))}
    </HStack>
  )
}
