'use client'

import React, { FC } from 'react'
import { ToCProps } from '../props'
import { HStack } from '@chakra-ui/react'
import Link from 'next/link'
import { ToCItemText } from '../typography'

export const TableOfContents: FC<ToCProps> = ({ links }) => {
  const gap = {
    base: 1.5,
    md: 2,
    lg: 2.5,
  }

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault()
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
      window.history.replaceState({}, '', `#${id}`) // Don't save scroll position in history
    }
  }

  return (
    <HStack gap={gap} wrap="wrap">
      {links.map((link, index) => (
        <HStack key={index} gap={gap}>
          <Link href={`#${link.id}`} onClick={e => scrollToSection(e, link.id)}>
            <ToCItemText>{link.label}</ToCItemText>
          </Link>
          {index < links.length - 1 && <>|</>}
        </HStack>
      ))}
    </HStack>
  )
}
