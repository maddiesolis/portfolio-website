import { CloseButton, Drawer, HStack, VStack } from '@chakra-ui/react'
import { FC, useState } from 'react'
import { NavItem, ToCItem } from './typography'
import Link from 'next/link'
import { FiMenu } from 'react-icons/fi'
import { CustomIconButton } from './icon-button'

interface LinkProps {
  label: string
  url: string
}

interface NavProps {
  links: LinkProps[]
}

export const GlobalNavMenu: FC<NavProps> = ({ links }) => {
  return (
    <VStack gap={4} align={'right'}>
      {links.map((link, index) => (
        <Link key={index} href={link.url}>
          <NavItem>{link.label}</NavItem>
        </Link>
      ))}
    </VStack>
  )
}

export const TableOfContents: FC<NavProps> = ({ links }) => {
  const gap = {
    base: 4,
    md: 8,
    lg: 12,
  }
  return (
    <HStack gap={gap} wrap={'wrap'}>
      {links.map((link, index) => (
        <HStack key={index} gap={gap}>
          <Link href={link.url}>
            <ToCItem>{link.label}</ToCItem>
          </Link>
          {index < links.length - 1 && <ToCItem>|</ToCItem>}
        </HStack>
      ))}
    </HStack>
  )
}

export const DrawerManu: FC<NavProps> = ({ links }) => {
  const [open, setOpen] = useState(false)

  return (
    <Drawer.Root open={open} onOpenChange={e => setOpen(e.open)}>
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
          <GlobalNavMenu links={links} />
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  )
}
