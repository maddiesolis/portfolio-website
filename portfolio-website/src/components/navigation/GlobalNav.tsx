'use client'

import { FC } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'
import { LinkProps } from '../props'
import { DrawerMenu } from './DrawerMenu'
import { SidebarMenu } from './Sidebar'

export const GlobalNav: FC = () => {
  const isMobile = useBreakpointValue({ base: true, md: false })
  if (isMobile === undefined) return null

  // Todo: Move this. Config? next.js.config? Ask ChatGPT. Maybe use next LinkProps?
  const links: LinkProps[] = [
    { label: 'Home', url: '/' },
    { label: 'About', url: '/about' },
    { label: 'Projects', url: '/projects' },
    { label: 'Experience', url: '/experience' },
    { label: 'Contact', url: '/contact' },
  ]

  return isMobile ? <DrawerMenu links={links} /> : <SidebarMenu links={links} />
}
