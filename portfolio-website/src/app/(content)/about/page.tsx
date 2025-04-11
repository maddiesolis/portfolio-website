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
            name: 'TypeScript',
            imageSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
            skillUrl: 'https://www.typescriptlang.org/',
          },
          {
            name: 'SQL',
            imageSrc:
              'https://static-00.iconduck.com/assets.00/sql-database-generic-icon-1521x2048-d0vdpxpg.png',
            skillUrl: 'https://www.mysql.com/',
          },
          {
            name: 'Python',
            imageSrc:
              'https://www.citypng.com/public/uploads/preview/hd-python-logo-symbol-transparent-png-735811696257415dbkifcuokn.png',
            skillUrl: 'https://www.python.org/',
          },
          {
            name: 'C',
            imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png',
            skillUrl: 'https://en.wikipedia.org/wiki/C_(programming_language)',
          },
          {
            name: 'C++',
            imageSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png',
            skillUrl: 'https://isocpp.org/',
          },
          {
            name: 'Java',
            imageSrc:
              'https://static-00.iconduck.com/assets.00/java-original-icon-1510x2048-qvtt7tr9.png',
            skillUrl: 'https://www.java.com/',
          },
          {
            name: 'React',
            imageSrc: 'https://www.svgrepo.com/show/354259/react.svg',
            skillUrl: 'https://reactjs.org/',
          },
          {
            name: 'Next.js',
            imageSrc: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg',
            skillUrl: 'https://nextjs.org/',
          },
          {
            name: 'NestJS',
            imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg',
            skillUrl: 'https://nestjs.com/',
          },
          {
            name: 'TypeORM',
            imageSrc:
              'https://mediaresource.sfo2.digitaloceanspaces.com/wp-content/uploads/2024/04/29200417/typeorm-logo-F243B34DEE-seeklogo.com.png',
            skillUrl: 'https://typeorm.io/',
          },
          {
            name: 'Jest',
            imageSrc: 'https://static-00.iconduck.com/assets.00/jest-icon-1855x2048-ifiupldr.png',
            skillUrl: 'https://jestjs.io/',
          },
          {
            name: 'Git',
            imageSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png',
            skillUrl: 'https://git-scm.com/',
          },
          {
            name: 'GitHub',
            imageSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png',
            skillUrl: '',
          },
          {
            name: 'VS Code',
            imageSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
            skillUrl: 'https://code.visualstudio.com/',
          },
          {
            name: 'DataDog',
            imageSrc:
              'https://imgix.datadoghq.com/img/about/presskit/logo-v/dd_vertical_white.png?auto=format&fit=max&w=847&dpr=2',
            skillUrl: 'https://www.datadoghq.com/',
          },
          {
            name: 'BigQuery',
            imageSrc:
              'https://images.icon-icons.com/2699/PNG/512/google_bigquery_logo_icon_168150.png',
            skillUrl: 'https://cloud.google.com/bigquery',
          },
          {
            name: 'Storybook',
            imageSrc: 'https://www.svgrepo.com/show/354397/storybook-icon.svg',
            skillUrl: 'https://storybook.js.org/',
          },
          {
            name: 'Figma',
            imageSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/1667px-Figma-logo.svg.png',
            skillUrl: 'https://www.figma.com/',
          },
          {
            name: 'Bruno',
            imageSrc: 'https://docs.usebruno.com/bruno.png',
            skillUrl: 'https://bruno.ai/',
          },
          {
            name: 'Linear',
            imageSrc:
              'https://cdn.prod.website-files.com/5f15081919fdf673994ab5fd/6417e9db62883903b13efe0b_Linear%20Logo.svg',
            skillUrl: 'https://linear.app/',
          },
          {
            name: 'Sheets',
            imageSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Google_Sheets_2020_Logo.svg/1489px-Google_Sheets_2020_Logo.svg.png',
            skillUrl: 'https://www.google.com/sheets/about/',
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
