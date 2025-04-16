'use client'

import { FC, useEffect, useState } from 'react'
import { DrawerMenuProps } from '../props'
import { Box, CloseButton, Drawer, Flex, IconButton } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { SidebarMenu } from './Sidebar'
import '@/css/animations.css'

export const DrawerMenu: FC<DrawerMenuProps> = ({ links }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMenu(true)
    }, 2500) // 2.5 seconds delay
    return () => clearTimeout(timer)
  }, [])

  const handleClose = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 500)
  }
  return (
    <Drawer.Root open={isOpen} onOpenChange={e => setIsOpen(e.open)}>
      <Flex justify={'flex-end'} align={'center'} h={8}>
        {showMenu && (
          <Box className="fadeIn">
            <Drawer.Trigger data-label="drawer-trigger" asChild>
              <IconButton
                aria-label="Open menu"
                w="fit-content"
                h="fit-content"
                bg="none"
                color="black"
                _hover={{
                  color: 'gray.500',
                }}
              >
                <FiMenu
                  style={{
                    width: '2rem',
                    height: '2rem',
                  }}
                />
              </IconButton>
            </Drawer.Trigger>
          </Box>
        )}
      </Flex>
      <Drawer.Positioner>
        <Drawer.Content py={24} px={8} bg="white">
          <Drawer.CloseTrigger asChild>
            <CloseButton
              bg="none"
              color="black"
              _hover={{
                color: 'gray.500',
              }}
            />
          </Drawer.CloseTrigger>
          <SidebarMenu links={links} onClick={handleClose} />
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}
