import { Achievements } from '@/components/about/Awards'
import { Introduction } from '@/components/about/Introduction'
import { Education } from '@/components/about/Education'
import { Languages } from '@/components/about/Languages'
import { Skills } from '@/components/about/Skills'
import { ContentPageContainer } from '@/components/shared/ContentPageContainers'

export default function About() {
  return (
    <ContentPageContainer title="About">
      <Introduction>
        Hello! I’m Madeline — a full stack developer based in beautiful British Columbia. With a
        background in both Computer Science and Visual Arts, I bring a creative, multidisciplinary
        perspective to software development and UI/UX design.
        <br />
        <br />
        Professionally, I focus on web development, but outside of work, I love building creative
        coding projects (like this website!). I’m passionate about crafting scalable, reliable
        software that solves real-world problems. Whether I’m writing clean, maintainable code,
        designing intuitive interfaces, or improving workflows, my goal is always the same: build
        with people in mind.
      </Introduction>
      <Education
        educations={[
          {
            institution: 'University of Victoria',
            degree: 'Bachelor of Science',
            major:
              'Computer Science and Visual Arts Combined Major. Graduated with Distinction and Co-operative Education.',
            startMonth: 'September',
            startYear: '2019',
            endMonth: 'May',
            endYear: '2024',
          },
        ]}
      />
      <Skills
        skills={[
          {
            name: 'TypeScript',
            imageSrc: '/svg/skills/typescript.svg',
            skillUrl: 'https://www.typescriptlang.org/',
          },
          {
            name: 'MySQL',
            imageSrc: '/svg/skills/mysql.svg',
            skillUrl: 'https://www.mysql.com/',
          },
          {
            name: 'Python',
            imageSrc: '/svg/skills/python.svg',
            skillUrl: 'https://www.python.org/',
          },
          {
            name: 'C',
            imageSrc: '/svg/skills/c.svg',
            skillUrl: 'https://en.wikipedia.org/wiki/C_(programming_language)',
          },
          {
            name: 'C++',
            imageSrc: '/svg/skills/cpp.svg',
            skillUrl: 'https://en.wikipedia.org/wiki/C%2B%2B',
          },
          {
            name: 'Java',
            imageSrc: '/svg/skills/java.svg',
            skillUrl: 'https://www.java.com/',
          },
          {
            name: 'React',
            imageSrc: '/svg/skills/react.svg',
            skillUrl: 'https://reactjs.org/',
          },
          {
            name: 'Next.js',
            imageSrc: '/svg/skills/nextjs.svg',
            skillUrl: 'https://nextjs.org/',
          },
          {
            name: 'NestJS',
            imageSrc: '/svg/skills/nestjs.svg',
            skillUrl: 'https://nestjs.com/',
          },
          {
            name: 'TypeORM',
            imageSrc: '/svg/skills/typeorm.svg',
            skillUrl: 'https://typeorm.io/',
          },
          {
            name: 'Jest',
            imageSrc: '/svg/skills/jest.svg',
            skillUrl: 'https://jestjs.io/',
          },
          {
            name: 'Git',
            imageSrc: '/svg/skills/git.svg',
            skillUrl: 'https://git-scm.com/',
          },
          {
            name: 'GitHub',
            imageSrc: '/svg/skills/github.svg',
            skillUrl: 'https://github.com/',
          },
          {
            name: 'VS Code',
            imageSrc: '/svg/skills/vscode.svg',
            skillUrl: 'https://code.visualstudio.com/',
          },
          {
            name: 'DataDog',
            imageSrc: '/svg/skills/datadog.svg',
            skillUrl: 'https://www.datadoghq.com/',
          },
          {
            name: 'BigQuery',
            imageSrc: '/svg/skills/bigquery.svg',
            skillUrl: 'https://cloud.google.com/bigquery',
          },
          {
            name: 'Storybook',
            imageSrc: '/svg/skills/storybook.svg',
            skillUrl: 'https://storybook.js.org/',
          },
          {
            name: 'Figma',
            imageSrc: '/svg/skills/figma.svg',
            skillUrl: 'https://www.figma.com/',
          },
          {
            name: 'Bruno',
            imageSrc: '/svg/skills/bruno.svg',
            skillUrl: 'https://www.usebruno.com/',
          },
          {
            name: 'Linear',
            imageSrc: '/svg/skills/linear.svg',
            skillUrl: 'https://linear.app/',
          },
          {
            name: 'Sheets',
            imageSrc: '/svg/skills/sheets.svg',
            skillUrl: 'https://www.google.com/sheets/about/',
          },
        ]}
      />
      <Languages
        languages={[
          {
            name: 'English',
            descriptionInLanguage:
              'Having grown up in an English and Spanish speaking household, I am a native English speaker. Beyond being my first language, I have always valued clear and thoughtful communication, both verbal and written. During university, I completed a business communications course that covered the essentials of professional communication—principles I continue to apply daily to ensure my interactions are precise and effective.',
          },
          {
            name: 'Spanish',
            descriptionInLanguage:
              'Como chilena-canadiense, crecí hablando español con mi familia. Nací en Chile y me mudé con mi familia a los siete años, por lo que completé parte de mi educación escolar allá. También tomé clases de español durante la secundaria, donde aprendí formas gramaticales más sofisticadas. Completé el GCSE en español y obtuve una calificación de A* (95% o más). Puedo conversar en español y entiendo casi todo, aunque mi nivel no es tan alto como en inglés.',
            descriptionInEnglish:
              'As a Chilean-Canadian, I grew up speaking Spanish with my family. I was born in Chile and moved with my family at the age of seven, so I completed part of my early education there. I also took Spanish classes in high school, where I learned more advanced grammar. I completed the Spanish GCSE and received an A* (95% or higher). I can hold conversations in Spanish and understand almost everything, although my level isn’t as strong as it is in English.',
          },
          {
            name: 'French',
            descriptionInLanguage:
              'J’ai appris le français à l’école primaire, au secondaire, et à l’université. Comme le français et l’espagnol sont similaires sur le plan grammatical, je trouve que l’apprentissage du français est un peu plus facile que celui d’autres langues. Je considère mon niveau de français comme intermédiaire : je peux converser, lire et écrire en français, mais pas encore avec aisance ou fluidité.',
            descriptionInEnglish:
              'I learned French in elementary school, high school, and university. Since French and Spanish are grammatically similar, I find learning French a bit easier than other languages. I consider my French level to be intermediate: I can hold conversations, read, and write in French, but not yet with ease or fluency.',
          },
          {
            name: 'Mandarin',
            descriptionInLanguage:
              '自2022年開始，我一直在學中文。我的等級很基本，現在可以讀寫拼音並進行基本對話。最終，我希望學會讀寫漢字並說得流利。',
            descriptionInEnglish:
              'Since 2022, I have been learning Mandarin. My level is quite basic, and I can currently read and write pinyin and hold simple conversations. Eventually, I hope to learn to read and write Chinese characters and speak fluently.',
          },
        ]}
      />
      <Achievements
        achievements={[
          {
            title: "Zonta Club of Victoria's Women in Technology Award",
            year: '2022',
            url: 'https://zontavictoria.org/women-in-stem',
          },
          {
            title: 'University of Victoria Computer Science Co-op Report Scholarship',
            year: '2022',
          },
          {
            title: 'Event planner for Game to Give fundraiser',
            year: '2022',
          },
          {
            title: 'Computer science tutoring for university students',
            year: '2020 - present',
          },
          {
            title: 'University of Victoria Entrance Scholarship',
            year: '2019',
          },
          {
            title: 'CUPE Local 801 Geri Marchuk Memorial Bursary',
            year: '2019',
          },
        ]}
      />
    </ContentPageContainer>
  )
}
