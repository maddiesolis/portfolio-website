import { FC } from 'react'
import { Card, Image, Tag, Wrap } from '@chakra-ui/react'
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa'
import { ProjectProps, SocialLinkProps } from '../props'
import { Label, PageSubHeader, Paragraph } from '../typography'
import { SocialLinks } from '../shared/SocialLinks'

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
    websiteUrl && {
      label: 'Live project',
      url: websiteUrl,
      icon: <FaGlobe style={{ width: '100%', height: '100%' }} />,
    },
    githubUrl && {
      label: 'GitHub repository',
      url: githubUrl,
      icon: <FaGithub style={{ width: '100%', height: '100%' }} />,
    },
    linkedInUrl && {
      label: 'LinkedIn post',
      url: linkedInUrl,
      icon: <FaLinkedin style={{ width: '100%', height: '100%' }} />,
    },
  ].filter(Boolean) as SocialLinkProps[]

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
        <PageSubHeader>{title}</PageSubHeader>
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
        <SocialLinks links={links} gap={{ base: 2, md: 3, lg: 4 }} h={{ base: 5, md: 5, lg: 6 }} />
      </Card.Footer>
    </Card.Root>
  )
}
