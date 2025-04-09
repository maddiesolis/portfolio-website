'use client'

import { FC } from 'react'
import { ProjectProps } from '../props'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { Project } from './Project'
import { keyframes } from '@emotion/react'

const slideIn = keyframes`
  0% {
    transform: translateX(-5%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`

export const ProjectsGrid: FC<{ projects: ProjectProps[] }> = ({ projects }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={{ base: 4, md: 5, lg: 6 }}>
      {projects.map((project, index) => (
        <Box key={index} animation={`${slideIn} 0.4s ease-in-out ${index * 0.3}s both`}>
          <Project {...project} />
        </Box>
      ))}
    </SimpleGrid>
  )
}
