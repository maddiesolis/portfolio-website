import { FC, useEffect } from 'react'
import { SidebarNavProps } from '../props'
import { Box, useBreakpointValue, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { NavItemText } from '../typography'
import { keyframes } from '@emotion/react'
import { usePathname } from 'next/navigation'
import React from 'react'

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const grow = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`

const Underline: FC = () => (
  <Box
    position="absolute"
    left={0}
    right={0}
    mt={1}
    height={0.5}
    bg="blue.500"
    zIndex={-1}
    animation={`${grow} 0.3s ease-in-out`}
    transformOrigin="right"
  />
)

export const SidebarMenu: FC<SidebarNavProps> = ({ links, onClick }) => {
  const [showSidebar, setShowSidebar] = React.useState(false)
  const shouldDelay = useBreakpointValue({ base: false, md: true })
  const path = usePathname()
  const paddingY = { base: 3, md: 3.5, lg: 4 }

  // Todo: Sidebar and Logo appear at the same time, make global animation + delay function file
  useEffect(() => {
    if (shouldDelay) {
      const timer = setTimeout(() => {
        setShowSidebar(true)
      }, 2500) // 2.5 seconds delay
      return () => clearTimeout(timer)
    } else {
      setShowSidebar(true)
    }
  }, [shouldDelay])

  return (
    <VStack align="right">
      {showSidebar &&
        links.map((link, index) => {
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
                position={'relative'}
                pt={index === 0 ? 0 : paddingY}
                pb={paddingY}
                animation={{
                  base: 'none',
                  md: `${slideIn} 0.5s ease-in-out ${index * 0.4}s both`,
                }}
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
