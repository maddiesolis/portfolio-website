'use client'

import { FC } from 'react'
import { ParentProps } from './props'
import { Grid, GridItem } from '@chakra-ui/react'

export const RootContainer: FC<ParentProps> = ({ children }) => {
  return (
    <Grid
      m={{ base: 2, md: 4, lg: 8 }}
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
        Navigation
      </GridItem>

      <GridItem area="content" bg="green.100">
        {children}
      </GridItem>
    </Grid>
  )
}
