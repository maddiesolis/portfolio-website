import { FC } from 'react'
import { NavProps } from '../props'
import { Box, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { NavItemText } from '../typography'

export const SidebarMenu: FC<NavProps> = ({ links, closeMenu }) => {
  const paddingY = { base: 3, md: 3.5, lg: 4 }
  return (
    <VStack align="right" gap="none">
      {links.map((link, index) => (
        <Link key={index} href={link.url} onClick={closeMenu}>
          <Box pt={index === 0 ? 0 : paddingY} pb={paddingY}>
            <NavItemText>{link.label}</NavItemText>
          </Box>
        </Link>
      ))}
    </VStack>
  )
}
