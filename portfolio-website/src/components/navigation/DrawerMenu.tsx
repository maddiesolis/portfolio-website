'use client'

import { FC, useState } from 'react'
import { NavProps } from '../props'
import { CloseButton, Drawer, Flex, IconButton } from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import { SidebarMenu } from './Sidebar'

export const DrawerMenu: FC<NavProps> = ({ links }) => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root open={open} onOpenChange={e => setOpen(e.open)}>
      <Flex justify={'flex-end'} align={'center'}>
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
      </Flex>
      <Drawer.Positioner>
        <Drawer.Content py={24} px={8}>
          <Drawer.CloseTrigger asChild>
            <CloseButton
              bg="none"
              color="black"
              _hover={{
                color: 'gray.500',
              }}
            />
          </Drawer.CloseTrigger>
          <SidebarMenu links={links} closeMenu={() => setOpen(false)} />
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}
