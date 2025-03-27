import { FC } from 'react'
import { ParentProps } from './props'
import { Flex, Grid, GridItem, Stack } from '@chakra-ui/react'
import { GlobalNav } from './navigation/GlobalNav'

export const RootContainer: FC<ParentProps> = ({ children }) => {
  return (
    <Grid
      mt={{ base: 4, md: 8, lg: 12 }}
      mx={{ base: 4, md: 8, lg: 16 }}
      h={'100vh'}
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

      <GridItem area="content" bg="green.100">
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

export const ContentPagesContainer: FC<ParentProps> = ({ children }) => {
  return <Stack gap={{ base: 4, md: 8, lg: 12 }}>{children}</Stack>
}
