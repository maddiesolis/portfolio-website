import { FC } from 'react'
import { ContentPageContainerProps, JobSectionProps, ParentProps } from './props'
import { Flex, Grid, GridItem, Stack, VStack } from '@chakra-ui/react'
import { GlobalNav } from './navigation/GlobalNav'
import { PageHeader, SectionHeader } from './typography'
import { TableOfContents } from './navigation/TableOfContents'
import { Logo } from './Logo'
import Image from 'next/image'

export const RootContainer: FC<ParentProps> = ({ children }) => {
  return (
    <Grid
      // Todo: Should bottom padding be on the root or inside the content page container?
      py={{ base: 4, md: 8, lg: 12 }}
      px={{ base: 4, md: 8, lg: 16 }}
      h={'100vh'}
      position={'relative'}
      templateColumns={{ base: '1fr 1fr', md: '2fr 6fr 2fr' }}
      templateRows={{ base: '2rem auto', md: '1fr' }}
      templateAreas={{
        base: `
          "logo nav"
          "content content"
        `,
        md: `
          "logo content nav"
        `,
      }}
    >
      <GridItem area="logo" bg="blue.500">
        <Logo />
      </GridItem>

      <GridItem area="nav" bg="red.500">
        <GlobalNav />
      </GridItem>

      <GridItem area="content" bg="green.100" overflowY={'scroll'}>
        {children}
      </GridItem>
    </Grid>
  )
}

export const CorePagesContainer: FC<ParentProps> = ({ children }) => {
  return (
    <Flex
      pt={{ base: '30%', md: '40%', lg: 0 }}
      alignItems={{ base: 'start', md: 'start', lg: 'center' }}
      justifyContent="center"
      h={'full'}
    >
      {children}
    </Flex>
  )
}

export const ContentPageContainer: FC<ContentPageContainerProps> = ({
  title,
  tableOfContentsLinks,
  children,
}) => {
  return (
    <Stack gap={{ base: 10, md: 14, lg: 16 }}>
      <Stack
        position={'sticky'}
        top={0}
        zIndex={1}
        gap={{ base: 1, md: 1.5, lg: 2 }}
        bg="green.100"
      >
        <PageHeader>{title}</PageHeader>
        {tableOfContentsLinks && <TableOfContents links={tableOfContentsLinks} />}
      </Stack>
      <Stack gap={{ base: 8, md: 10, lg: 12 }}>{children}</Stack>
    </Stack>
  )
}

export const ContentPageSectionContainer: FC<ParentProps> = ({ children }) => {
  return <Stack gap={{ base: 3, md: 4, lg: 6 }}>{children}</Stack>
}

export const JobSectionContainer: FC<JobSectionProps> = ({ title, children }) => {
  return (
    <Stack gap={{ base: 2, md: 2.5, lg: 3 }} alignItems={'start'}>
      <SectionHeader>{title}</SectionHeader>
      {children}
    </Stack>
  )
}

export const ContactPageContainer: FC<ParentProps> = ({ children }) => {
  return <VStack gap={{ base: 5, md: 6, lg: 7 }}>{children}</VStack>
}
