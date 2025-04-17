import { FC } from 'react'
import { ProjectProps } from '../props'
import { Box, SimpleGrid } from '@chakra-ui/react'
import { Project } from './Project'
import '@/css/animations.css'
import { sizing } from '../shared/sizing'

export const ProjectsGrid: FC<{ projects: ProjectProps[] }> = ({ projects }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={sizing.gap.medium}>
      {projects.map((project, index) => (
        <Box
          key={index}
          className="slideInRightFast"
          animationDelay={`${0.5 + index * 0.3}s`}
          animationFillMode={'both'}
          display={'flex'}
        >
          <Project {...project} />
        </Box>
      ))}
    </SimpleGrid>
  )
}
