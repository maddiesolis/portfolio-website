import { FC } from 'react'
import { NavProps } from '../props'
import { Box, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { NavItemText } from '../typography'

export const SidebarMenu: FC<NavProps> = ({ links }) => {
  return (
    <VStack data-label={'sidebar'} align={'right'} gap={'none'}>
      {links.map((link, index) => (
        <Link key={index} href={link.url}>
          <Box py={{ base: 2, md: 2, lg: 3 }}>
            <NavItemText>{link.label}</NavItemText>
          </Box>
        </Link>
      ))}
    </VStack>
  )
}
