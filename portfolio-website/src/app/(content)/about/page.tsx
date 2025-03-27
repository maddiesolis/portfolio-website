import { Awards } from '@/components/about/Awards'
import { Biography } from '@/components/about/Biography'
import { Education } from '@/components/about/Education'
import { Languages } from '@/components/about/Languages'
import { Skills } from '@/components/about/Skills'
import { TableOfContents } from '@/components/navigation/TableOfContents'
import { PageHeader } from '@/components/typography'
import { Stack } from '@chakra-ui/react'

export default function About() {
  return (
    <>
      <Stack>
        <PageHeader>About</PageHeader>
        <TableOfContents
          links={[
            { label: 'About Me', url: '#about-me' },
            { label: 'My Work', url: '#my-work' },
            { label: 'My Interests', url: '#my-interests' },
            { label: 'My Skills', url: '#my-skills' },
          ]}
        />
      </Stack>
      <Biography>
        I am a software engineer with a passion for creating and maintaining high-quality software.
        I have experience in full-stack development and have worked on a variety of projects ranging
        from web applications to embedded systems. I am always eager to learn new technologies and
        improve my skills.
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
    </>
  )
}
