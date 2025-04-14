import { ProjectsGrid } from '@/components/projects/Projects'
import { ContentPageContainer } from '@/components/shared/ContentPageContainers'

export default function Projects() {
  return (
    <ContentPageContainer title="Projects">
      <ProjectsGrid
        projects={[
          {
            title: 'Artisway',
            description:
              'As part of a university project, I collaborated with four UVic students to develop Artisway—an e-commerce platform connecting local artisans with buyers in Victoria, BC. I led the design efforts and contributed significantly to development, building frontend components and shaping the database structure.',
            technologies: ['E-commerce', 'Full Stack', 'UI/UX Design', 'Project Management'],
            imageUrl: '/images/artisway.png',
            websiteUrl: 'https://www.artisway.ca/',
            githubUrl: 'https://github.com/MarketMate-Seng480/Artisway',
            linkedInUrl:
              'https://www.linkedin.com/posts/juliahoang_artisway-handcrafted-by-locals-inspired-activity-7191659075804319747-xW1l?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD5G-U4BAkeBTXXPXgHw2x5wjG-Bap9NJwE',
          },
          {
            title: 'Data Visualization',
            description:
              'Combining web development with contemporary art, I created a dynamic visualization that transforms important data into a more human, tangible experience. By simulating the frequency of specific events, the project helps users grasp the scale of mass occurrences. It incorporates frontend development, sprite-based animations, and real-time server updates.',
            technologies: [
              'Creative Coding',
              'Contemporary Art',
              'Frontend',
              'Server',
              'Animation',
            ],
            imageUrl: '/images/data-visualization.png',
            websiteUrl: 'https://catsagestats.com/',
            githubUrl: 'https://github.com/maddiesolis/cat-sage-stats',
          },
          {
            title: 'Generative Poem',
            description:
              'This project features a TypeScript and React frontend, using a simple randomization algorithm to generate a constantly evolving poem. It was exhibited as a contemporary art piece at The Void, the University of Victoria’s digital art gallery.',
            technologies: ['Creative Coding', 'Contemporary Art', 'Frontend'],
            imageUrl: '/images/generative-poem.png',
            websiteUrl: 'https://catsagepoem.com/',
            githubUrl: 'https://github.com/maddiesolis/cat-sage-poem',
            instagramUrl:
              'https://www.instagram.com/p/C5RYX73uSTB/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
          },
          {
            title: 'Generative Art Gallery',
            technologies: ['Creative Coding', 'Contemporary Art', 'Frontend'],
            description:
              'This site was created as an interactive, accessible, and personable artwork. Through the use of randomization, the site is always changing in colour, imagery, and text. This work utilizes my own photography and digital drawings, as well as a quiz I created and other pieces of text throughout the site.',
            imageUrl: '/images/generative-gallery.png',
            websiteUrl: 'https://catsagegallery.com/',
            githubUrl: 'https://github.com/maddiesolis/generative-site',
          },
        ]}
      />
    </ContentPageContainer>
  )
}
