import { Awards } from '@/components/about/Awards'
import { Biography } from '@/components/about/Biography'
import { Education } from '@/components/about/Education'
import { Languages } from '@/components/about/Languages'
import { Skills } from '@/components/about/Skills'
import { ContentPageContainer } from '@/components/shared/ContentPageContainers'

export default function About() {
  return (
    <ContentPageContainer title="About">
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
          {
            name: 'React',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://reactjs.org/',
          },
          {
            name: 'Next.js',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://nextjs.org/',
          },
          {
            name: 'Node.js',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://nodejs.org/',
          },
          {
            name: 'Python',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://www.python.org/',
          },
          {
            name: 'Java',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://www.java.com/',
          },
          {
            name: 'C++',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://isocpp.org/',
          },
          {
            name: 'C#',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://learn.microsoft.com/en-us/dotnet/csharp/',
          },
          {
            name: 'JavaScript',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://www.javascript.com/',
          },
          {
            name: 'TypeScript',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://www.typescriptlang.org/',
          },
          {
            name: 'HTML',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
          },
          {
            name: 'CSS',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
          },
          {
            name: 'SQL',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://www.mysql.com/',
          },
          {
            name: 'NoSQL',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://www.mongodb.com/',
          },
          {
            name: 'Git',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://git-scm.com/',
          },
        ]}
      />
      <Languages
        languages={[
          {
            name: 'English',
            descriptionInLanguage:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ante convallis, condimentum magna sed, eleifend dui. Aenean ex est, aliquam vel ante bibendum, maximus rhoncus nisi. Praesent pulvinar lorem sed tempus venenatis. Morbi blandit non lacus at pretium.',
          },
          {
            name: 'Spanish',
            descriptionInLanguage:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ante convallis, condimentum magna sed, eleifend dui. Aenean ex est, aliquam vel ante bibendum, maximus rhoncus nisi. Praesent pulvinar lorem sed tempus venenatis. Morbi blandit non lacus at pretium.',
            descriptionInEnglish:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut ante convallis, condimentum magna sed, eleifend dui. Aenean ex est, aliquam vel ante bibendum, maximus rhoncus nisi. Praesent pulvinar lorem sed tempus venenatis. Morbi blandit non lacus at pretium.',
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
    </ContentPageContainer>
  )
}
