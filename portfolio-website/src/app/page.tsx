'use client'

import { Button, CloseButton, Drawer, IconButton, Portal, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'

export const Home = () => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root open={open} onOpenChange={e => setOpen(e.open)}>
      <Drawer.Trigger asChild>
        <IconButton aria-label="open navigation menu" variant="ghost" size="lg">
          <BiMenu />
        </IconButton>
      </Drawer.Trigger>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content p="10">
            <Drawer.Header>
              <Drawer.Title>Drawer Title</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <Text textStyle="md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </Text>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline" p="3" colorPalette={'brand.primary'}>
                Cancel
              </Button>
              <Button p="3" colorPalette={'brand.primary'}>
                Save
              </Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  )
}

export default Home
