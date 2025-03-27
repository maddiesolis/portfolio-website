'use client'

import { FC, useState } from 'react'
import { NavProps } from '../props'
import { CloseButton, Drawer, Flex } from '@chakra-ui/react'
import { CustomIconButton } from '../custom/CustomIconButton'
import { FiMenu } from 'react-icons/fi'
import { SidebarMenu } from './Sidebar'

export const DrawerMenu: FC<NavProps> = ({ links }) => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root open={open} onOpenChange={e => setOpen(e.open)}>
      <Flex justify={'flex-end'}>
        <Drawer.Trigger asChild>
          <CustomIconButton
            color="brand.primary.400"
            _hover={{
              color: 'brand.primary.500',
            }}
          >
            <FiMenu
              style={{
                width: '2rem',
                height: '2rem',
              }}
            />
          </CustomIconButton>
        </Drawer.Trigger>
      </Flex>
      <Drawer.Positioner>
        <Drawer.Content pt={24} pr={8}>
          <Drawer.CloseTrigger asChild>
            <CloseButton
              size="xl"
              bg="none"
              color="brand.primary.400"
              _hover={{
                color: 'brand.primary.500',
              }}
            />
          </Drawer.CloseTrigger>
          <SidebarMenu links={links} />
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}
