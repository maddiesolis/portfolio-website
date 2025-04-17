import { FC } from 'react'
import { Card, Image, Stack } from '@chakra-ui/react'
import { FaGithub, FaGlobe, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { ProjectProps, SocialLinkProps } from '../props'
import { PageSubHeader, Paragraph, SectionHeader } from '../typography'
import { SocialLinks } from '../shared/SocialLinks'
import Link from 'next/link'
import { Tags } from '../shared/Tags'
import { sizing } from '../shared/sizing'

export const Project: FC<ProjectProps> = ({
  title,
  year,
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
      // Todo: Make icon global style
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
    <Card.Root size="sm" borderColor={'border.light'}>
      <Card.Body alignItems={'center'} gap={sizing.gap.small}>
        <Link href={websiteUrl} target="_blank" rel="noopener noreferrer">
          <Image
            src={imageUrl}
            alt="project preview"
            aspectRatio={16 / 9}
            borderRadius={'sm'}
            w="full"
            border="1px solid"
            borderColor={'border.light'}
          />
        </Link>
        <Stack gap={sizing.gap.xxxsmall} alignItems={'center'}>
          <PageSubHeader>{title}</PageSubHeader>
          <SectionHeader fontWeight={'light'}>{year}</SectionHeader>
        </Stack>
        <Tags items={technologies} justify={'center'} />
        <Paragraph textAlign={'center'}>{description}</Paragraph>
      </Card.Body>
      <Card.Footer justifyContent={'center'}>
        <SocialLinks links={links} gap={sizing.gap.small} h={sizing.height.smallIcon} />
      </Card.Footer>
    </Card.Root>
  )
}
