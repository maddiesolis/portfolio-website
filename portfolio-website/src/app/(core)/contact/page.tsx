import { ContactPageContainer } from '@/components/contact/ContactPageContainer'
import { SocialLinks } from '@/components/shared/SocialLinks'
import { Paragraph, Title } from '@/components/typography'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

export default function Contact() {
  return (
    <ContactPageContainer>
      <Title>Get in touch</Title>
      <Paragraph textAlign={'center'}>Please reach out! I would love to hear from you.</Paragraph>
      <SocialLinks
        links={[
          {
            url: 'mailto:madelinesdeo@gmail.com',
            label: 'Email',
            icon: <FiMail style={{ width: '100%', height: '100%' }} />,
            navigateWithHref: true,
          },
          {
            url: 'https://github.com/maddiesolis',
            label: 'GitHub',
            icon: <FaGithub style={{ width: '100%', height: '100%' }} />,
          },
          {
            url: 'https://www.linkedin.com/in/madeline-solis-de-ovando-066ab8251',
            label: 'LinkedIn',
            icon: <FaLinkedin style={{ width: '100%', height: '100%' }} />,
          },
        ]}
        gap={{ base: 5, md: 6, lg: 7 }}
        h={{ base: 6, md: 7, lg: 8 }}
      />
    </ContactPageContainer>
  )
}
