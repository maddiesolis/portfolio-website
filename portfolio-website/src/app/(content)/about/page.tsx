import { Achievements } from '@/components/about/Achievements'
import { Introduction } from '@/components/about/Introduction'
import { Education } from '@/components/about/Education'
import { Languages } from '@/components/about/Languages'
import { Skills } from '@/components/about/Skills'
import { ContentPageContainer } from '@/components/shared/ContentPageContainers'
import TypescriptSvg from '@/components/svgs/TypescriptSvg'
import MysqlSvg from '@/components/svgs/MysqlSvg'
import PythonSvg from '@/components/svgs/PythonSvg'
import CSvg from '@/components/svgs/CSvg'
import CppSvg from '@/components/svgs/CppSvg'
import JavaSvg from '@/components/svgs/JavaSvg'
import ReactSvg from '@/components/svgs/ReactSvg'
import NextjsSvg from '@/components/svgs/NextjsSvg'
import NestjsSvg from '@/components/svgs/NestjsSvg'
import TypeormSvg from '@/components/svgs/TypeormSvg'
import JestSvg from '@/components/svgs/JestSvg'
import GitSvg from '@/components/svgs/GitSvg'
import GithubSvg from '@/components/svgs/GithubSvg'
import VscodeSvg from '@/components/svgs/VscodeSvg'
import DatadogSvg from '@/components/svgs/DatadogSvg'
import BigquerySvg from '@/components/svgs/BigquerySvg'
import StorybookSvg from '@/components/svgs/StorybookSvg'
import FigmaSvg from '@/components/svgs/FigmaSvg'
import BrunoSvg from '@/components/svgs/BrunoSvg'
import LinearSvg from '@/components/svgs/LinearSvg'
import SheetsSvg from '@/components/svgs/SheetsSvg'
import LaunchdarklySvg from '@/components/svgs/Launchdarkly'

export default function About() {
  return (
    <ContentPageContainer title="About">
      <Introduction
        paragraphs={[
          `Hello! I’m Madeline — a full stack developer based in beautiful British Columbia. With a background in Computer Science and Visual Arts, I bring a multidisciplinary perspective to software development and UI/UX design. What I love most about product development is the creative process itself — turning a complex idea into something tangible and refined.`,
          `I work across the full web stack: frontend, APIs, databases, and UX, with a focus on building scalable, reliable tools that solve real-world problems. My approach to software development is grounded in staying current with industry standards, embracing challenges, and prioritizing both efficiency and quality. It is also important to me that I centre people in my work, whether it’s end-users interacting with an interface, fellow developers maintaining my code, or fostering effective cross-team collaboration.`,
          `Outside of work, I like to explore the intersection of art and technology through creative coding projects, blending my own artwork and photography to create interactive experiences.`,
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

            skillUrl: 'https://www.typescriptlang.org/',
            svg: <TypescriptSvg />,
          },
          {
            name: 'MySQL',
            skillUrl: 'https://www.mysql.com/',
            svg: <MysqlSvg />,
          },
          {
            name: 'Python',
            skillUrl: 'https://www.python.org/',
            svg: <PythonSvg />,
          },
          {
            name: 'C',
            skillUrl: 'https://en.wikipedia.org/wiki/C_(programming_language)',
            svg: <CSvg />,
          },
          {
            name: 'C++',
            skillUrl: 'https://en.wikipedia.org/wiki/C%2B%2B',
            svg: <CppSvg />,
          },
          {
            name: 'Java',
            skillUrl: 'https://www.java.com/',
            svg: <JavaSvg />,
          },
          {
            name: 'React',
            skillUrl: 'https://reactjs.org/',
            svg: <ReactSvg />,
          },
          {
            name: 'Next.js',
            skillUrl: 'https://nextjs.org/',
            svg: <NextjsSvg />,
          },
          {
            name: 'NestJS',
            skillUrl: 'https://nestjs.com/',
            svg: <NestjsSvg />,
          },
          {
            name: 'TypeORM',
            skillUrl: 'https://typeorm.io/',
            svg: <TypeormSvg />,
          },
          {
            name: 'Jest',
            skillUrl: 'https://jestjs.io/',
            svg: <JestSvg />,
          },
          {
            name: 'Git',
            skillUrl: 'https://git-scm.com/',
            svg: <GitSvg />,
          },
          {
            name: 'GitHub',
            skillUrl: 'https://github.com/',
            svg: <GithubSvg />,
          },
          {
            name: 'VS Code',
            skillUrl: 'https://code.visualstudio.com/',
            svg: <VscodeSvg />,
          },
          {
            name: 'DataDog',
            skillUrl: 'https://www.datadoghq.com/',
            svg: <DatadogSvg />,
          },
          {
            name: 'LaunchDarkly',
            skillUrl: 'https://launchdarkly.com/',
            svg: <LaunchdarklySvg />,
          },
          {
            name: 'BigQuery',
            skillUrl: 'https://cloud.google.com/bigquery',
            svg: <BigquerySvg />,
          },
          {
            name: 'Storybook',
            skillUrl: 'https://storybook.js.org/',
            svg: <StorybookSvg />,
          },
          {
            name: 'Figma',
            skillUrl: 'https://www.figma.com/',
            svg: <FigmaSvg />,
          },
          {
            name: 'Bruno',
            skillUrl: 'https://www.usebruno.com/',
            svg: <BrunoSvg />,
          },
          {
            name: 'Linear',
            skillUrl: 'https://linear.app/',
            svg: <LinearSvg />,
          },
          {
            name: 'Sheets',
            skillUrl: 'https://www.google.com/sheets/about/',
            svg: <SheetsSvg />,
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
            title: 'Dean’s Graduation List – UVic Engineering & Computer Science',
            year: 'Spring 2024',
            url: 'https://www.uvic.ca/ecs/about/deans-office/index.php#ipn-dean-s-list',
          },
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
        ]}
      />
    </ContentPageContainer>
  )
}
