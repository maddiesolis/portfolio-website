import { FC } from 'react'
import { ProjectProps } from '../props'
import { SimpleGrid } from '@chakra-ui/react'
import { Project } from './Project'

export const ProjectsGrid: FC<{ projects: ProjectProps[] }> = ({ projects }) => {
  return (
    <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} gap={{ base: 4, md: 5, lg: 6 }}>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </SimpleGrid>
  )
}
