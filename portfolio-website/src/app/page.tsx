'use client'

import { Awards, Biography, Education, Languages, Skills } from '@/components/about'
import { Jobs } from '@/components/experience'
import { GlobalNavMenu, DrawerManu, TableOfContents } from '@/components/navigation'
import { Projects } from '@/components/projects'
import {
  Keywords,
  Label,
  NavItem,
  PageHeader,
  PageSubHeader,
  Paragraph,
  SectionHeader,
  ToCItem,
} from '@/components/typography'
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
      <Box
        m={4}
        h="fit-content"
        borderStyle="solid"
        borderWidth={2}
        borderColor="brand.secondary.500"
      >
        Experience
        <Jobs
          jobs={[
            {
              title: 'Job Title 1',
              company: 'Company 1',
              dates: [
                { startMonth: 'January', startYear: '2020', endMonth: 'February', endYear: '2021' },
                { startMonth: 'March', startYear: '2021', endMonth: 'April', endYear: '2022' },
              ],
              brief: 'Brief description of job 1',
              technologies: ['React', 'Node.js', 'Python'],
              description: ['Descriptions 1', 'Description 2', 'Description 3'],
            },
            {
              title: 'Job Title 2',
              company: 'Company 2',
              dates: [
                { startMonth: 'January', startYear: '2020', endMonth: 'February', endYear: '2021' },
                { startMonth: 'March', startYear: '2021', endMonth: 'April', endYear: '2022' },
              ],
              brief: 'Brief description of job 2',
              technologies: ['React', 'Node.js', 'Python'],
              description: ['Descriptions 1', 'Description 2', 'Description 3'],
            },
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
        Projects
        <Projects
          projects={[
            {
              title: 'Project 1',
              description: 'Description of project 1',
              technologies: ['React', 'Node.js', 'Python'],
              imageUrl:
                'data:image/webp;base64,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',
              websiteUrl: 'https://www.example.com',
              githubUrl: 'https://www.github.com',
              linkedInUrl: 'https://www.linkedin.com',
            },
            {
              title: 'Project 2',
              description: 'Description of project 2',
              technologies: ['React', 'Node.js', 'Python'],
              imageUrl:
                'data:image/webp;base64,UklGRtQOAABXRUJQVlA4IMgOAAAQSgCdASriAJsAPqVKoEqmJCMhqDUbyMAUiWcA0ne5mxx09iGnJ9lztf4BD0dzjnN/VjIkeM8D/7xvxfQAahGrY5fv/+oUZtFi/ldHeN5+MVp67mJx7EPOiKczM8urSKI7bHGX/fNWnliBVg6TsfhqBC4+jiozTPCpowS7ElwEJqL/R2jDHSMDDw1oKn6K0WLUt0HHWNGejU9us/8y3YyVXQEV6aadzE4zQ5k7+hpoALaTMu2nmuMcHgI4pWX4dI1jrAnFJAD0qd1eDy8sWbQt895oAlrReYQygWSncw+tnv/znuVMP65P0vopslmWBGojtKoltH64o/5ShV7wsCIC9DVBYUNWQUvIii2yigSox2eV69tjmw+hcLKwDeJZA+0cwQlZfrMhcf6kdaMOH3a3Mtb/5KIleC3auCf8txpovgvZLwvLrb5r2ENI+4eHzbbYoZ899zXWtQJghMcYsLCiz3HT3hAHO+KEe0kz22pf+l/ufK/e93Q/+xIZYKTvEBZiI7Fj/1GIm8P8cefgBssIqoa4a526vUuHwkUkwAniN+gf/HfvRHGeCRpCwI8/h+VZf37W+LQLDwfufnhv8+qrT394/Fl86oFIRAAZbQz+HfBp2x1SBDcqYtbfFEWiJgwIV6FMd8/YCmxprtdg2hZYQqq5m7Zs3HgCE+egYYZMUsV+xboQWnnFruY6vC5xl1/l0I78bvcLUu3M6l97FwT2W0dVfKmGK4njlazj8oK6a6YE820VMzAb3oG6NjBGo6RkANngcLC5o9yRqIClO+hynzldYmoO7MgAAP78+EARvkA+6GqamHJAA+ln8WkjJolnwlpvXWota+V2jrHqqZ+Hm5VJj42OWRtMdTGuXu7lw36k+kGaA9keL7HOALA45cYYxsoMg8OZc2NgT8XX4GjnrulPupvs/94f+xzaWrNoRrWqITNbtAELeY3QxHeyGHKMyVRfx0PlUyorc7DpwBAKVEqAOpka5l/iNk5AZq+SzPSK+1Sq6xIiuePrJJ+LSJkC5wScDNtKzZsOfPJePWk2SO4kX5mqZtNq0NxFJLMyqTu+ujc9jAGTM/zic2UOIGrKJzPSiaqQFzIV9TohIWje5SrvB0DerRl5fJqLcaOQxaaPmyJMaId2osFtk16FLgsNEUyyC043MDCJLFtIaikzklu/peSqcCZNHybHrWfnHfteZwvKfiKoQq5XKr1K3QpKzClzQ+HfJo0geKtt2c3B8RGNLV6ciDFoMDSyhm9w/EHKZPOCWJ8tS39yBuP1T6l7rgAjdlrz9VFuC6EVVAv4fIFx3nNNh8dL4YlIWs4Ez2Yyr2u4UuXJWgJsW7Vjyzq12cdOZyelxYvA+IriM16PgsIlbqkrTz0EWbjAOdjLfA3CCGM+TdIsDoWflsleMJu3wKkTTdTFrAyFXRb8wCCmICimVGb6Js0OcV0UT2nKpZwDs+cvYNXPthpHfbBGyVKkJ9qysu3KxOTHm4yMHu1+4saPQnsSuxOHRuZI+s8E0O9OoMiHcYu2su9zCWidAhEEkTtzrRttaEDK90omMr4eHKKeIGiFWfN2ou71BcVVitrCrWuB6gURilc+mYJPKZV/jz+tdJfmge3ME83fQGFn+1c6Nh7ZSL6ERDxtCXuFYPfnEg4jhZTMqRydISQvvLBnkG6er0ToFrJQFFMhJcQAACV3XSBmXiGIifxHVM67+HvO7uRvUd3ohY55H6Hn9phSbdD75ZHEf99F9je7lEU7tdrnztpRT6NsBzjuQhcaAentClivWD4GqXfjS8iQWcF9984/GpObIav2EdOxOB53S6ybibMu2mnyp/NtfO41XTd2+gvpn9v141Y1rWCzEuoVyq3ZJurkfBx0ZvQoJhzBIcs80TZn/Gb2Fi4ifGnq3XbNtMvlcFF9dsSzuw9ogNikF970T4I2gwq7FSj1YM941bbQwOpftypcBmr8dunIwe1k97nd8HTGRXWSBZ9UdMKjSdJBxGOQ2kzWUUNn6l6UhIAIEnEzZz+tbJfcJaNXHLLQ4GRLNG8f/l2XeL/VlkRZh6lk+0+cOBC5n/t1bcx20IgoACPkrdLjlm2owKpeyoOYG3zB3H5673bi47eQOyk7IED33N/GC6N3FERK9QLX7hf/aT+KNgWiiRLHa7YKqeIebVy1fkPF56AjdnmEmc7FnAEkIWb9Rv6h8Gs32vg/Er+GbHA9J1RJA/SKcnfvLfq+/Ykrmi35oLuTVq+C2SvNX4Cl417sDeQQejLt3mA1axTWC8/5UWTV7S7jJKUc3x9GxbTGel6MNYcccxkb2rLL85blu7LifsQHAhX7eoy53OgkQ5P3BJdMKgo8ajld8uQCQ5DOnvTgUvg5gPjafUjaqzUb6fsk9DcGFQV4d4p8a3YyvfMoyZXZ4psEezWzYDNO1Z1RqQn2bfc/BfM45paxuOYYHCJLfLBv/k9vEMxvx0ZM1K6skK0WA3nCBXnMDy5zCnhOQrG4lWIYrdeoLWeW9TmYIYKVV/IPqA4krc+VBN1cAyrX+OcymhRXoorNjdZcfaTU11wVQy+SzOX72dEbTy5EIzVkkpHkRtFh2frneBEsKQpwwjMuvBCtVEYOXcS0iAcpHPw4l46QJM4Mh7xS+MYtpIJ0R6rAmMO9c6FXw6dQ7jt/l1l/01wMvLJZkCK6/uExkzcwwN3it/MuBLrSgiAVpWO31DjuhS/v4r5vgbD3PoFHj1Cikww1KfWZUzbeVsO/3NSc+vxi2cAm1l2dOgU4EayFRMIECP108O0oEVhh0KJI8nuqjCD4UKmrD459u3BicwEeyQ9YIqcmPeIH35o+WQJEpO0bxcjlSsSZeSGax2YzPmuB2Fy0c5HqYnLvbcbecIr3MjD1mjSgmPQmnZyOxinOh8lOwJRcX/yvm9RW616ttpAGIK8Ls1XgRL9JexFt9N2RAhKeOIE18J222rjai0g9JWnLx447N751m73Wmoj2vbS5vEproeHXQHpZAJzIh3oJrhGb4T7iFhQA2B9k4zH+CiLEVzIdwTiBa8eq4ReUz7x9xTk6LPU7byZKHUSSlIfQS5JtQ9XNSTzxH2VlY+ZPznDB4+IGyaq4TKp/JnM659nGfubbgUhdWQqaT5xmkHt1/AemeQOFwTo9hUxlsPIjvzzQT2waHDh6p9FzvsdxZVjUz/J+0+HNgjSw07vOMhZwI/KaZ7iVsMSjx2h7EAIV8QDXI+8VpA5KwhXOD6IqFlxPAaXei59q7f7ey4nHNvZF7yFx9V6/a9iop39400tqzt8HLdlzWWiNtaTvnsS4tBpCSGIcNdY24vhSXGny1cmJ7GsX+yfGrq+kEexv+xuVtISmZIzq6pn/Gz+nhjQpEhODRw44+nP5a509A/oEWJTYq5RKKieUkt5Ea8jA9Wuksnecry+eglzB8AkKV7taCmS0C5QmiH3oQFYzdfocph/udDvNy2W7z6wFwyUREx6RZ1OLUt93WCSxuJs6JlUIJS0f8f4MKVNY3qJTunFnpCOLRvykepaQaIqNLl8MIIiyp+z2YHA6bX3X+pegzPasFZVDdH14sn2NSYzzsOyo5XT5wWiysnIHruIiJAbUsS4z/oCG2z1fd4b7kqOxsgJs0JuXT+w+ePqwfoB6TJ45xFb8rkzArdFTGV/dEnmrbKaY/sZ2g05KReR1KY0o5gZDsXKEIcZIJ/L/LIK4VRxlK4essjlfGKsMpuRK5FBG1EM7IoPQvq2QBatNk9d8m4fjww75tBTVsydfrJn4G65h/d1quZc5l3/pcz3l6z8XEK87QqWG3rkFLCK+cACrIz6K13W5bl8CVS7YwzAh8WKvWCzEJW64PgIgReNY6kvR5QD+nWRlEnFmOA5CwUFbC+BaEgKxD+LMuUjWTGhvNmG+PkWuKr9bB5ZZC+PJNj/XUnZPPO0lHzWWSNntIJWioYRxEcltGvXbLFiogWS7iG6BcITtdJBON3QZHWatWNbnTnIMz/04iUzHFLEAYLuGrWOKDDhWANdn8eKcZ4ebUVblXEpFtxPloyhWbWmX6zevgotIAa9MhDhHCFdsZZclVD4zAZzqMaW9XuPvNuv/RbUH9IDk4h4yzYoZQxyVSgK1/WR5li/AeERCPBQlRsUvTZU1AzVrdk110Zi8eKvh2njzwfflXG2MpxJZjYXDR/sBeSRn6gCMmNPns7YGt/ZqdlWfWveCwxanFqz6zmJH/NGFnc9Q9qhAFrhksYcgnREwwtjRqPcjGxXWLaBkhM/3X2ZwpD/P7tCdXZvs50sBRvt5Yq6495r4fUjplYoUOLMk9sYoDezW9ktFg09coE6JYIuRm18blCkRb3kYE5Zps+5Z8KiQa8dYE9mH44GVRSRm3G/ybYjZBpVs78zu5sYddnLLcdUJeevYXaUuPF6pdo92Jp0F/60Mc6d9YrfGSw3NeAOWuNU59nCirZ2G+bU8V9YMTnpvJfu/LWM+GWz33Nzs1M+ANkV4mYmkG1p58X226k+RVUqJQw1g+OEmQxKt2srFMM8e+iYk9AuUtTNME4QJSPpY9K1cDkXHLBnQJ3ojS1sZ/MSxMDcS93NcWToQLmhDd4EAdBYeYtB2PXzMfBZqXQuQAzUxnyevCAb24Be8zTqaysf4qrVCrXFogBxCLhrP8imDh6HaWzH9vVglDjGalo5LZaZrC8tpPX9MkrbbEC4DhSO0eHHFiagnPpJsi6C8BVewdgs2qxf4sEjcsqQuj/wazicQPPlfwO/E5y0vXr9PmBwxt33/zeRA+N28izK/LLSerN4hLWndfpzj8N3Cy/jO7E3Nv75ms6iKa9gEUp5JUhEC5uSjXuPp3sch3PmtfhOqi6TXglilbk+myigfkW3iszJvmCRx9AKOo/OIl/yL5zm0OrEj3kTKCC8ob2+Jo5bZlLDLKwd8dG++XnkePzA6mPJo6V6EjyPKBR3v+R+nt9hu71HGgXTEAyBI1SLdL53VfZ8OMQZ68MdSYRxR30mMTFKZIuTL6zE4iiQ7sHEEiFGWque5UGDffwJiqQPndOXrjOsILV1xsCLy/sBk3AAA',
              websiteUrl: 'https://www.example.com',
              githubUrl: 'https://www.github.com',
              linkedInUrl: 'https://www.linkedin.com',
            },
            {
              title: 'Project 3',
              description: 'Description of project 3',
              technologies: ['React', 'Node.js', 'Python'],
              imageUrl:
                'data:image/webp;base64,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',
              websiteUrl: 'https://www.example.com',
              githubUrl: 'https://www.github.com',
              linkedInUrl: 'https://www.linkedin.com',
            },
          ]}
        />
      </Box>
    </VStack>
  )
}

export default Home
