import { FC } from 'react'
import { JobSectionProps, ParentProps } from './props'
import { Box, Flex, Grid, GridItem, Stack } from '@chakra-ui/react'
import { GlobalNav } from './navigation/GlobalNav'
import { SectionHeader } from './typography'
import { Logo } from './Logo'

export const RootContainer: FC<ParentProps> = ({ children }) => {
  /**
   * To make logo and nav stick to the top of the page, we need to apply
   * overflow to the grid on md and lg breakpoints, and apply overflow to
   * the "content" grid item on base breakpoint.
   */
  return (
    <Grid
      px={{ base: 4, md: 8, lg: 16 }}
      h={'100vh'}
      overflowY={{ base: 'initial', md: 'auto' }}
      scrollbar={'hidden'}
      templateColumns={{ base: '1fr 1fr', md: '2fr 6fr 2fr' }}
      templateRows={{ base: '4rem 1fr', md: '1fr' }}
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
      <GridItem area="logo">
        {/* Todo: Make global top padding variable (used in ContentPageContainer as well)*/}
        <Box position={'sticky'} top={0} zIndex={1} pt={{ base: 4, md: 8, lg: 12 }}>
          <Logo />
        </Box>
      </GridItem>

      <GridItem area="nav">
        <Box position={'sticky'} top={0} zIndex={2} pt={{ base: 4, md: 8, lg: 12 }}>
          <GlobalNav />
        </Box>
      </GridItem>

      <GridItem
        area="content"
        overflow={{ base: 'auto', md: 'initial' }}
        scrollbar={'hidden'}
        zIndex={3}
      >
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

export const JobSectionContainer: FC<JobSectionProps> = ({ title, children }) => {
  return (
    <Stack gap={{ base: 2, md: 2.5, lg: 3 }} alignItems={'start'}>
      <SectionHeader>{title}</SectionHeader>
      {children}
    </Stack>
  )
}
