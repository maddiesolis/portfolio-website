import { FC } from 'react'
import { ProjectProps } from '../props'
import { Wrap } from '@chakra-ui/react'
import { Project } from './Project'

export const ProjectsGrid: FC<{ projects: ProjectProps[] }> = ({ projects }) => {
  return (
    <Wrap>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Wrap>
  )
}
