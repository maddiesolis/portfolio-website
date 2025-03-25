'use client'

import { GlobalNavMenu, TableOfContents } from '@/components/ui/navigation'
import {
  Keywords,
  Label,
  NavItem,
  PageHeader,
  PageSubHeader,
  Paragraph,
  SectionHeader,
  ToCItem,
} from '@/components/ui/typography'
import { Box, VStack } from '@chakra-ui/react'

export const Home = () => {
  return (
    <VStack align={'left'}>
      <Box
        m={4}
        h="fit-content"
        borderStyle="solid"
        borderWidth={2}
        borderColor="brand.secondary.500"
      >
        Typography
        <PageHeader>Page header</PageHeader>
        <PageSubHeader>Page subheader</PageSubHeader>
        <SectionHeader>Section header</SectionHeader>
        <Paragraph>Paragraph</Paragraph>
        <Label>Label</Label>
        <NavItem>Nav item</NavItem>
        <ToCItem>Table of contents item</ToCItem>
        <Keywords keywords={['keyword1', 'keyword2', 'keyword3']} />
      </Box>
      <Box
        m={4}
        h="fit-content"
        borderStyle="solid"
        borderWidth={2}
        borderColor="brand.secondary.500"
      >
        Navigation
        <GlobalNavMenu
          links={[
            { label: 'Home', url: '/' },
            { label: 'About', url: '/about' },
            { label: 'Portfolio', url: '/portfolio' },
            { label: 'Experience', url: '/experience' },
            { label: 'Contact', url: '/contact' },
          ]}
        />
        <TableOfContents
          links={[
            { label: 'Home', url: '/' },
            { label: 'About', url: '/about' },
            { label: 'Portfolio', url: '/portfolio' },
            { label: 'Experience', url: '/experience' },
            { label: 'Contact', url: '/contact' },
          ]}
        />
      </Box>
    </VStack>
  )
}

export default Home
