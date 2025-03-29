'use client'

import { FC } from 'react'
import { Card, HStack, IconButton, Image, Tag, Wrap } from '@chakra-ui/react'
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa'
import { ProjectProps } from '../props'
import { Label, Paragraph, SectionHeader } from '../typography'

export const Project: FC<ProjectProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  websiteUrl,
  githubUrl,
  linkedInUrl,
}) => {
  const links = [
    {
      url: websiteUrl,
      label: 'link to live project',
      icon: <FaGlobe style={{ width: '100%', height: '100%' }} />,
    },
    {
      url: githubUrl,
      label: 'link to GitHub repository',
      icon: <FaGithub style={{ width: '100%', height: '100%' }} />,
    },
    {
      url: linkedInUrl,
      label: 'link to LinkedIn post',
      icon: <FaLinkedin style={{ width: '100%', height: '100%' }} />,
    },
  ]
  return (
    <Card.Root size="sm">
      <Card.Body alignItems={'center'} gap={{ base: 4, md: 5, lg: 6 }}>
        <Image
          src={imageUrl}
          alt="project preview"
          aspectRatio={16 / 9}
          borderRadius={'sm'}
          w="full"
        />
        <SectionHeader>{title}</SectionHeader>
        <Wrap>
          {technologies.map((technology, index) => (
            <Tag.Root key={index} rounded={'full'} colorPalette={'blue'}>
              <Label>{technology}</Label>
            </Tag.Root>
          ))}
        </Wrap>
        <Paragraph textAlign={'center'}>{description}</Paragraph>
      </Card.Body>
      <Card.Footer justifyContent={'center'}>
        <HStack gap={{ base: 2, md: 3, lg: 4 }}>
          {links.map(
            ({ url, label, icon }) =>
              url && (
                <IconButton
                  key={label}
                  aria-label={label}
                  onClick={() => window.open(url, '_blank')}
                  h={{ base: 5, md: 5, lg: 6 }}
                  bg="none"
                  color="black"
                  _hover={{ color: 'gray.500' }}
                >
                  {icon}
                </IconButton>
              )
          )}
        </HStack>
      </Card.Footer>
    </Card.Root>
  )
}
