import { SocialLinks } from '@/components/custom/SocialLinks'
import { Title } from '@/components/typography'
import { VStack } from '@chakra-ui/react'
import { FaGithub, FaGlobe, FaLinkedin } from 'react-icons/fa'

export default function Contact() {
  return (
    <VStack>
      <Title>Get in touch</Title>
      <SocialLinks
        links={[
          {
            url: 'https://www.madelinesolis.dev',
            label: 'link to live project',
            icon: <FaGlobe style={{ width: '100%', height: '100%' }} />,
          },
          {
            url: 'https://www.madelinesolis.dev',
            label: 'link to GitHub repository',
            icon: <FaGithub style={{ width: '100%', height: '100%' }} />,
          },
          {
            url: 'https://www.madelinesolis.dev',
            label: 'link to LinkedIn post',
            icon: <FaLinkedin style={{ width: '100%', height: '100%' }} />,
          },
        ]}
        gap={{ base: 5, md: 6, lg: 7 }}
        h={{ base: 6, md: 7, lg: 8 }}
      />
    </VStack>
  )
}
