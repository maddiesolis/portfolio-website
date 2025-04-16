'use client'

import { FC, useState } from 'react'
import { DrawerMenuProps } from '../props'
import { Box, CloseButton, Drawer, Flex, IconButton } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { SidebarMenu } from './Sidebar'
import '@/css/animations.css'

export const DrawerMenu: FC<DrawerMenuProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClose = () => {
    setTimeout(() => {
      setIsOpen(false)
    }, 500)
  }

  return (
    <Drawer.Root open={isOpen} onOpenChange={e => setIsOpen(e.open)}>
      <Flex justify={'flex-end'} align={'center'} h={8}>
        <Box className="fadeIn" animationDelay={`2.5s`} animationFillMode={'both'}>
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
