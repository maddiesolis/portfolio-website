import { Box, Card, Image, Tag, Wrap } from '@chakra-ui/react'
import { FC } from 'react'
import { ProjectProps } from './props'
import { CustomIconButton } from './icon-button'
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa'

const Project: FC<ProjectProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  websiteUrl,
  githubUrl,
  linkedInUrl,
}) => {
  return (
    <Card.Root maxW="sm" overflow="hidden">
      <Image src={imageUrl} alt="Project Preview Image" aspectRatio={5 / 3} />
      <Card.Body gap="2" alignItems={'center'}>
        <Card.Title>{title}</Card.Title>
        <Box>
          {technologies.map((technology, index) => (
            <Tag.Root key={index}>
              <Tag.Label>{technology}</Tag.Label>
            </Tag.Root>
          ))}
        </Box>
        <Card.Description>{description}</Card.Description>
      </Card.Body>
      <Card.Footer gap="2" justifyContent="center">
        {websiteUrl && (
          <CustomIconButton
            aria-label="link to live project"
            onClick={() => window.open(websiteUrl, '_blank')}
            color="black"
            _hover={{
              color: 'gray.500',
            }}
          >
            <FaGlobe />
          </CustomIconButton>
        )}
        {githubUrl && (
          <CustomIconButton
            aria-label="link to github repository"
            onClick={() => window.open(githubUrl, '_blank')}
            color="black"
            _hover={{
              color: 'gray.500',
            }}
          >
            <FaGithub />
          </CustomIconButton>
        )}
        {linkedInUrl && (
          <CustomIconButton
            aria-label="link to linkedin post"
            onClick={() => window.open(linkedInUrl, '_blank')}
            color="black"
            _hover={{
              color: 'gray.500',
            }}
          >
            <FaLinkedin />
          </CustomIconButton>
        )}
      </Card.Footer>
    </Card.Root>
  )
}

export const Projects: FC<{ projects: ProjectProps[] }> = ({ projects }) => {
  return (
    <Wrap>
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </Wrap>
  )
}
