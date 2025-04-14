'use client'

import { FC, useLayoutEffect, useState } from 'react'
import { useBreakpointValue } from '@chakra-ui/react'
import { LinkProps } from '../props'
import { DrawerMenu } from './DrawerMenu'
import { SidebarMenu } from './Sidebar'

export const GlobalNav: FC = () => {
  const breakpointValue = useBreakpointValue({ base: true, md: false })
  const [isMobile, setIsMobile] = useState<boolean | undefined>(undefined)

  useLayoutEffect(() => {
    if (breakpointValue !== undefined) {
      setIsMobile(breakpointValue)
    }
  }, [breakpointValue])

  if (isMobile === undefined) return undefined // Prevent flickering

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
