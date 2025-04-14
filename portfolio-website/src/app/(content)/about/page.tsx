import { Achievements } from '@/components/about/Awards'
import { Biography } from '@/components/about/Biography'
import { Education } from '@/components/about/Education'
import { Languages } from '@/components/about/Languages'
import { Skills } from '@/components/about/Skills'
import { ContentPageContainer } from '@/components/shared/ContentPageContainers'

export default function About() {
  return (
    <ContentPageContainer title="About">
      <Biography>
        With a background in both Computer Science and Visual Arts, I bring a creative,
        multidisciplinary approach to software development and UI/UX design. As a full stack
        developer specializing in web development, I’m passionate about building thoughtful,
        user-centered digital experiences.
        <br />
        <br />
        My work sits at the intersection of creativity and problem solving—whether it’s writing
        clean, maintainable code, designing intuitive interfaces, or streamlining workflows to help
        teams operate more efficiently. I’m particularly interested in creative coding and
        developing systematic processes that elevate both individual and collaborative work.
      </Biography>
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
            imageSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png',
            skillUrl: 'https://www.typescriptlang.org/',
          },
          {
            name: 'MySQL',
            imageSrc: 'https://pngimg.com/d/mysql_PNG23.png',
            skillUrl: 'https://www.mysql.com/',
          },
          {
            name: 'Python',
            imageSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/2048px-Python.svg.png',
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
            skillUrl: 'https://en.wikipedia.org/wiki/C%2B%2B',
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
            skillUrl: 'https://github.com/',
          },
          {
            name: 'VS Code',
            imageSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png',
            skillUrl: 'https://code.visualstudio.com/',
          },
          {
            name: 'DataDog',
            imageSrc: 'https://cdn.worldvectorlogo.com/logos/datadog-1.svg',
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
            skillUrl: 'https://www.usebruno.com/',
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
              'Having grown up in an English-speaking household, I am a native English speaker. Beyond being my first language, I have always valued clear and thoughtful communication, both verbal and written. During university, I completed a business communications course that covered the essentials of professional communication—principles I continue to apply daily to ensure my interactions are clear, precise, and effective.',
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
            title: 'Event planner for Game to Give fundraiser',
            year: '2022',
          },
          {
            title:
              'Secondary school work experience at Emirates Group Headquarters, Flight Operations and NCC departments',
            year: '2017',
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
