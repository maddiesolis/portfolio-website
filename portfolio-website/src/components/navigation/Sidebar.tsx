import { FC } from 'react'
import { NavProps } from '../props'
import { VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { NavItem } from '../typography'

export const SidebarMenu: FC<NavProps> = ({ links }) => {
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
