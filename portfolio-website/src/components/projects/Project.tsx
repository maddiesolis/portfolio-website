import { FC } from 'react'
import { Card, Image, Tag, Wrap } from '@chakra-ui/react'
import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { ProjectProps, SocialLinkProps } from '../props'
import { Label, PageSubHeader, Paragraph } from '../typography'
import { SocialLinks } from '../shared/SocialLinks'
import Link from 'next/link'

export const Project: FC<ProjectProps> = ({
  title,
  description,
  technologies,
  imageUrl,
  websiteUrl,
  githubUrl,
  linkedInUrl,
  instagramUrl,
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
    instagramUrl && {
      label: 'Instagram post',
      url: instagramUrl,
      icon: <FaInstagram style={{ width: '100%', height: '100%' }} />,
    },
  ].filter(Boolean) as SocialLinkProps[]

  return (
    <Card.Root size="sm" borderColor={'gray.400'}>
      <Card.Body alignItems={'center'} gap={{ base: 4, md: 5, lg: 6 }}>
        <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageUrl}
            alt="project preview"
            aspectRatio={16 / 9}
            borderRadius={'sm'}
            w="full"
            border="1px solid"
            borderColor={'gray.400'}
          />
        </Link>
        <PageSubHeader>{title}</PageSubHeader>
        <Wrap justifyContent={'center'}>
          {technologies.map((technology, index) => (
            <Tag.Root key={index} rounded={'full'} variant={'outline'} border={'1px solid black'}>
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
