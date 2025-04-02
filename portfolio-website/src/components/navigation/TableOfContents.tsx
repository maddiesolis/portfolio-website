'use client'

import { FC } from 'react'
import { ToCProps } from '../props'
import { Button, HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { ToCItemText } from '../typography'

export const TableOfContents: FC<ToCProps> = ({ links }) => {
  const gap = {
    base: 1.5,
    md: 2,
    lg: 2.5,
  }

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <HStack gap={gap} wrap="wrap">
      {links.map((link, index) => (
        <HStack key={index} gap={gap}>
          <Button variant="ghost" p={0} onClick={() => scrollToSection(link.id)}>
            <ToCItemText>{link.label}</ToCItemText>
          </Button>
          {index < links.length - 1 && <ToCItemText>|</ToCItemText>}
        </HStack>
      ))}
    </HStack>
  )
}
