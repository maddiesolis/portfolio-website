import { FC } from 'react'
import { NavProps } from '../props'
import { Box, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { NavItemText } from '../typography'

export const SidebarMenu: FC<NavProps> = ({ links, closeMenu }) => {
  return (
    <VStack align="right" gap="none">
      {links.map((link, index) => (
        <Link key={index} href={link.url} onClick={closeMenu}>
          <Box py={{ base: 3, md: 3.5, lg: 4 }}>
            <NavItemText>{link.label}</NavItemText>
          </Box>
        </Link>
      ))}
    </VStack>
  )
}
