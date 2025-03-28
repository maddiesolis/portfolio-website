import { FC } from 'react'
import { ContentPageContainerProps, ParentProps } from './props'
import { Flex, Grid, GridItem, Stack } from '@chakra-ui/react'
import { GlobalNav } from './navigation/GlobalNav'
import { PageHeader } from './typography'
import { TableOfContents } from './navigation/TableOfContents'

export const RootContainer: FC<ParentProps> = ({ children }) => {
  return (
    <Grid
      pt={{ base: 4, md: 8, lg: 12 }}
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
        Logo
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
    // Todo: Make spacing global styles or variables
    <Stack data-label="header-and-content" gap={{ base: 6, md: 10, lg: 14 }}>
      <Stack data-label="title-and-toc">
        <PageHeader>{title}</PageHeader>
        {tableOfContentsLinks && <TableOfContents links={tableOfContentsLinks} />}
      </Stack>
      <Stack data-label="children" gap={{ base: 4, md: 6, lg: 8 }}>
        {children}
      </Stack>
    </Stack>
  )
}
