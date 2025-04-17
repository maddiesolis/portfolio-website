import { Achievements } from '@/components/about/Achievements'
import { Introduction } from '@/components/about/Introduction'
import { Education } from '@/components/about/Education'
import { Languages } from '@/components/about/Languages'
import { Skills } from '@/components/about/Skills'
import { ContentPageContainer } from '@/components/shared/ContentPageContainers'

export default function About() {
  return (
    <ContentPageContainer title="About">
      <Introduction
        paragraphs={[
          `Hello! I’m Madeline — a full stack developer based in beautiful British Columbia. With a background in both Computer Science and Visual Arts, I bring a multidisciplinary perspective to software development and UI/UX design.`,
          `Professionally, I work across the full web stack: frontend, APIs, databases, and some UX, with a focus on building scalable, reliable software that solves real-world problems. I care about creating tools that centre the people interacting with them, whether that’s end-users navigating an interface or fellow developers reading and maintaining code. I’m also drawn to improving how we work: optimizing development lifecycles, automating workflows, and finding processes that help teams collaborate more effectively — across devs and with other departments.`,
          `Outside of work, I like to explore the intersection of art and technology through creative coding projects (like this website!). These often incorporate my own drawing, creative writing, or photography, using code as a medium to create interactive, contemporary art experiences.`,
          `What I love most about software development is the creative process itself — turning a complex idea into something tangible and refined, whether it’s building from scratch or enhancing an existing product.`,
        ]}
      />
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
            descriptionInLanguage: `Having grown up in an English and Spanish speaking household, I’m a native English speaker who’s always valued clear and thoughtful communication — both verbal and written. It's something I prioritize in every interaction, whether I'm collaborating with teammates, writing documentation, or communicating across disciplines. I believe that clear, precise language is essential to building trust, solving problems efficiently, and working well with others.`,
          },
          {
            name: 'Spanish',
            descriptionInLanguage: `Como chilena-canadiense, crecí hablando español con mi familia. Nací en Chile y me mudé con mi familia a los siete años, por lo que completé parte de mi educación escolar allá. Durante la secundaria, tomé clases de español donde aprendí gramática más avanzada y completé el examen GCSE en español, obteniendo una calificación de A* (95 % o más). Puedo mantener conversaciones en español y entiendo casi todo, aunque mi nivel no es tan alto como en inglés.`,
            descriptionInEnglish: `As a Chilean-Canadian, I grew up speaking Spanish with my family. I was born in Chile and moved with my family at the age of seven, so I completed part of my early education there. In secondary school, I took Spanish classes where I learned more advanced grammar and completed the Spanish GCSE, receiving an A* (95% or higher). I can hold conversations in Spanish and understand almost everything, although my level isn’t as strong as it is in English.`,
          },
          {
            name: 'French',
            descriptionInLanguage: `J’ai appris le français à l’école primaire, au secondaire, et à l’université. Comme le français et l’espagnol sont similaires sur le plan grammatical, je trouve que l’apprentissage du français est un peu plus facile que celui d’autres langues. Je considère mon niveau de français comme intermédiaire : je peux converser, lire et écrire en français, mais pas encore avec aisance ou fluidité.`,
            descriptionInEnglish: `I learned French in elementary school, high school, and university. Since French and Spanish are grammatically similar, I find learning French a bit easier than other languages. I consider my French level to be intermediate: I can hold conversations, read, and write in French, but not yet with ease or fluency.`,
          },
          {
            name: 'Mandarin',
            descriptionInLanguage: `自2022年開始，我一直在學中文。我的等級很基本，現在可以讀寫拼音並進行基本對話。最終，我希望學會讀寫漢字並說得流利。`,
            descriptionInLanguageOtherScript: `Wǒ yǐjīng xué zhōngwén sān nián le. Wǒ de děngjí hěn jīběn, hé wǒ jīn yǒu de kěyǐ dú xiě pīnyīn hé jìnxíng jīběn duìhuà. Zuìhòu, wǒ yào xué dú xiě hànzì hé shuō liúlì de.`,
            descriptionInEnglish: `Since 2022, I have been learning Mandarin. My level is quite basic, and I can currently read and write pinyin and hold simple conversations. Eventually, I hope to learn to read and write Chinese characters and speak fluently.`,
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
