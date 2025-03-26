'use client'

import { Awards, Biography, Education, Languages, Skill, Skills } from '@/components/ui/about'
import { GlobalNavMenu, DrawerManu, TableOfContents } from '@/components/ui/navigation'
import {
  Keywords,
  Label,
  NavItem,
  PageHeader,
  PageSubHeader,
  Paragraph,
  SectionHeader,
  ToCItem,
} from '@/components/ui/typography'
import { Box, VStack } from '@chakra-ui/react'

export const Home = () => {
  return (
    <VStack align={'left'}>
      <Box
        m={4}
        h="fit-content"
        borderStyle="solid"
        borderWidth={2}
        borderColor="brand.secondary.500"
      >
        Typography
        <PageHeader>Page header</PageHeader>
        <PageSubHeader>Page subheader</PageSubHeader>
        <SectionHeader>Section header</SectionHeader>
        <Paragraph>Paragraph</Paragraph>
        <Label>Label</Label>
        <NavItem>Nav item</NavItem>
        <ToCItem>Table of contents item</ToCItem>
        <Keywords keywords={['keyword1', 'keyword2', 'keyword3']} />
      </Box>
      <Box
        m={4}
        h="fit-content"
        borderStyle="solid"
        borderWidth={2}
        borderColor="brand.secondary.500"
      >
        Navigation
        <GlobalNavMenu
          links={[
            { label: 'Home', url: '/' },
            { label: 'About', url: '/about' },
            { label: 'Portfolio', url: '/portfolio' },
            { label: 'Experience', url: '/experience' },
            { label: 'Contact', url: '/contact' },
          ]}
        />
        <TableOfContents
          links={[
            { label: 'Home', url: '/' },
            { label: 'About', url: '/about' },
            { label: 'Portfolio', url: '/portfolio' },
            { label: 'Experience', url: '/experience' },
            { label: 'Contact', url: '/contact' },
          ]}
        />
        <DrawerManu
          links={[
            { label: 'Home', url: '/' },
            { label: 'About', url: '/about' },
            { label: 'Portfolio', url: '/portfolio' },
            { label: 'Experience', url: '/experience' },
            { label: 'Contact', url: '/contact' },
          ]}
        />
      </Box>
      <Box
        m={4}
        h="fit-content"
        borderStyle="solid"
        borderWidth={2}
        borderColor="brand.secondary.500"
      >
        About
        <Biography>
          I am a software engineer with a passion for creating and maintaining high-quality
          software. I have experience in full-stack development and have worked on a variety of
          projects ranging from web applications to embedded systems. I am always eager to learn new
          technologies and improve my skills.
        </Biography>
        <Education
          educations={[
            {
              institution: 'University of California',
              degree: 'Bachelor of Science',
              major: 'Electrical Engineering and Computer Sciences',
              startMonth: 'August',
              startYear: '2017',
              endMonth: 'May',
              endYear: '2021',
            },
          ]}
        />
        <Languages
          languages={[
            {
              name: 'English',
              descriptionInLanguage: 'Native speaker, I speak English on a daily basis.',
            },
            {
              name: 'Spanish',
              descriptionInLanguage: 'Mi español no es perfecto, pero puedo comunicarme.',
              descriptionInEnglish: 'My Spanish is not perfect, but I can communicate.',
            },
            {
              name: 'French',
              descriptionInLanguage: 'Je parle français un peu.',
              descriptionInEnglish: 'I speak French a little bit.',
            },
          ]}
        />
        <Awards
          awards={[
            { title: 'Award 1', year: '2025' },
            {
              title: 'Award 2',
              year: '2024',
            },
            {
              title: 'Award 3',
              year: '2023',
              url: 'https://www.example.com',
            },
          ]}
        />
        <Skill name="React" url="https://www.svgrepo.com/show/354259/react.svg" />
        <Skills
          skills={[
            { name: 'React', url: 'https://www.svgrepo.com/show/354259/react.svg' },
            { name: 'Node.js', url: 'https://www.svgrepo.com/show/354259/react.svg' },
            { name: 'Python', url: 'https://www.svgrepo.com/show/354259/react.svg' },
            { name: 'Typescript', url: 'https://www.svgrepo.com/show/354259/react.svg' },
            { name: 'Javascript', url: 'https://www.svgrepo.com/show/354259/react.svg' },
            { name: 'SQL', url: 'https://www.svgrepo.com/show/354259/react.svg' },
            { name: 'Git', url: 'https://www.svgrepo.com/show/354259/react.svg' },
            { name: 'GitHub', url: 'https://www.svgrepo.com/show/354259/react.svg' },
            { name: 'VS Code', url: 'https://www.svgrepo.com/show/354259/react.svg' },
            { name: 'DataDog', url: 'https://www.svgrepo.com/show/354259/react.svg' },
            { name: 'Bruno', url: 'https://www.svgrepo.com/show/354259/react.svg' },
            { name: 'Figma', url: 'https://www.svgrepo.com/show/354259/react.svg' },
          ]}
        />
      </Box>
    </VStack>
  )
}

export default Home
