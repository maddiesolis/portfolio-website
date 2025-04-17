import { ProjectsGrid } from '@/components/projects/Projects'
import { ContentPageContainer } from '@/components/shared/ContentPageContainers'

export default function Projects() {
  return (
    <ContentPageContainer title="Projects">
      <ProjectsGrid
        projects={[
          {
            title: 'Artisway',
            year: '2024',
            technologies: ['E-commerce', 'Full Stack', 'UI/UX Design', 'Project Management'],
            description:
              'As part of a university project, I collaborated with four UVic students to develop Artisway—an e-commerce platform connecting local artisans with buyers in Victoria, BC. I led the design efforts and contributed significantly to development, building frontend components and shaping the database structure. The frontend is built with Next.js and Chakra UI, Prisma is used for database management, and Supabase for the database and authentication.',
            imageUrl: '/images/artisway.png',
            websiteUrl: 'https://www.artisway.ca/',
            githubUrl: 'https://github.com/MarketMate-Seng480/Artisway',
            linkedInUrl:
              'https://www.linkedin.com/posts/juliahoang_artisway-handcrafted-by-locals-inspired-activity-7191659075804319747-xW1l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5G-U4BAkeBTXXPXgHw2x5wjG-Bap9NJwE',
          },
          {
            title: 'Data Visualization',
            year: '2024',
            technologies: [
              'Creative Coding',
              'Contemporary Art',
              'Frontend',
              'Server',
              'Digital Illustration',
              'Photography',
              'Animation',
            ],
            description:
              'Combining web development with contemporary art, I created a visualization that transforms important data into a more human, tangible experience. The frontend is built with React, using TypeScript and Chakra UI, and features sprite animations illustrated by me. The server uses Next.js with Express and WebSockets to send real-time updates to the frontend.',
            imageUrl: '/images/data-visualization.png',
            websiteUrl: 'https://catsagestats.com/',
            githubUrl: 'https://github.com/maddiesolis/cat-sage-stats',
          },
          {
            title: 'Generative Poem',
            year: '2024',
            technologies: ['Creative Coding', 'Contemporary Art', 'Frontend', 'Creative Writing'],
            description:
              'This project features a TypeScript and React frontend, using a simple randomization algorithm to generate a constantly evolving poem. It was exhibited as a contemporary art piece at The Void, the University of Victoria’s digital art gallery.',
            imageUrl: '/images/generative-poem.png',
            websiteUrl: 'https://catsagepoem.com/',
            githubUrl: 'https://github.com/maddiesolis/cat-sage-poem',
            instagramUrl:
              'https://www.instagram.com/p/C5RYX73uSTB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          },
          {
            title: 'Generative Art Gallery',
            year: '2023',
            technologies: [
              'Creative Coding',
              'Contemporary Art',
              'Frontend',
              'Digital Illustration',
              'Photography',
              'Creative Writing',
            ],
            description:
              'This is a web-based contemporary artwork that aims to be interactive, accessible, and personable to the user. Through the use of randomization, the site’s imagery continuously evolves. It incorporates my own photography and digital illustration, as well as a creative activity for the user to partake in. Built using React with Typescript.',
            imageUrl: '/images/generative-gallery.png',
            websiteUrl: 'https://catsagegallery.com/',
            githubUrl: 'https://github.com/maddiesolis/generative-site',
          },
        ]}
      />
    </ContentPageContainer>
  )
}
