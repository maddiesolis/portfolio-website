import { FC } from 'react'
import { NavProps } from '../props'
import { HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { ToCItem } from '../typography'

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
