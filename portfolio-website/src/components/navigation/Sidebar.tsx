import { FC } from 'react'
import { SidebarNavProps } from '../props'
import { Box, useBreakpointValue, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { NavItemText } from '../typography'
import { usePathname } from 'next/navigation'
import React from 'react'
import '@/css/animations.css'

const Underline: FC = () => (
  <Box
    className="grow"
    position="absolute"
    left={0}
    right={0}
    mt={1}
    height={0.5}
    bg={'brand.secondary.neutral'}
    zIndex={-1}
    transformOrigin="right"
  />
)

export const SidebarMenu: FC<SidebarNavProps> = ({ links, onClick }) => {
  const shouldAnimate = useBreakpointValue({ base: false, md: true })
  const path = usePathname()

  // Todo: Sidebar and Logo appear at the same time, make global animation + delay function file
  return (
    <VStack align="right">
      {links.map((link, index) => {
        const isSelected = path === link.url
        return (
          <Link
            key={index}
            href={link.url}
            onClick={onClick}
            style={{
              display: 'flex',
              justifyContent: 'right',
            }}
          >
            <Box
              className={shouldAnimate ? 'slideInLeftBig' : ''}
              animationDelay={`${2.5 + index * 0.4}s`}
              animationFillMode={'both'}
              position={'relative'}
              pt={index === 0 ? 0 : { base: 3, md: 3.5, lg: 4 }}
              pb={{ base: 3, md: 3.5, lg: 4 }}
            >
              <NavItemText>{link.label}</NavItemText>
              {isSelected && <Underline />}
            </Box>
          </Link>
        )
      })}
    </VStack>
  )
}
