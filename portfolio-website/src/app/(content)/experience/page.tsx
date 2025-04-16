import { ContentPageContainer } from '@/components/shared/ContentPageContainers'
import { Jobs } from '@/components/experience/Jobs'

export default function Experience() {
  return (
    <ContentPageContainer title="Experience">
      <Jobs
        jobs={[
          {
            title: 'Full Stack Software Developer',
            company: 'Cognito Health',
            companyUrl: 'https://www.getcognito.ca/',
            logo: '/svg/logos/cognito.svg',
            dates: [
              {
                startMonth: 'May',
                startYear: '2024',
                endMonth: 'February',
                endYear: '2025',
                employmentType: 'Permanent, Full-time',
              },
              {
                startMonth: 'September',
                startYear: '2023',
                endMonth: 'October',
                endYear: '2023',
                employmentType: 'Part-time',
              },
              {
                startMonth: 'May',
                startYear: '2023',
                endMonth: 'August',
                endYear: '2023',
                employmentType: 'Co-op, Full-time',
              },
            ],
            brief:
              'Worked on the end-to-end development of user and admin-facing healthcare web platforms, contributing to design, development, integrations, testing, and ongoing support. Helped improve user experience, system reliability, and internal decision-making through thoughtful engineering and collaboration.',
            technologies: [
              'React',
              'Typescript',
              'RESTful API',
              'NestJS',
              'MySQL',
              'TypeORM',
              'Jest',
              'GitHub',
              'Visual Studio Code',
              'Figma',
              'DataDog',
              'Bruno',
              'Linear',
              'Google Sheets',
            ],
            description: [
              'Developed the company’s healthcare web portals using a React frontend (Typescript), a RESTful API in NestJS, and a MySQL database managed with TypeORM.',
              'Maintained third-party integrations (authentication, payments, scheduling, EMR) using webhooks and API endpoints.',
              'Wrote complex SQL queries to analyse patient data for leadership decision-making.',
              'Wrote unit and integration tests with Jest to ensure application reliability.',
              'Deployed changes to production via pull requests, utilizing GitHub Actions for automated build verification, and monitoring error logs and infrastructure health.',
              'Created high-fidelity UI/UX designs in Figma.',
              'Provided technical support by investigating error logs in DataDog, tracing source code, and replicating user scenarios in a staging environment.',
            ],
          },
          {
            title: 'Frontend Software Developer / Product Analyst',
            company: 'SaaSquatch',
            companyUrl: 'https://www.saasquatch.com/',
            logo: '/svg/logos/saasquatch.svg',
            dates: [
              {
                startMonth: 'January',
                startYear: '2023',
                endMonth: 'April',
                endYear: '2023',
                employmentType: 'Part-time',
              },
              {
                startMonth: 'May',
                startYear: '2022',
                endMonth: 'December',
                endYear: '2022',
                employmentType: 'Co-op, Full-time',
              },
            ],
            brief:
              'Contributed to the frontend development of a referral marketing platform, focusing on implementation, component documentation, and design collaboration. Conducted product research and analysis to support executive decision-making.',
            technologies: [
              'React',
              'Typescript',
              'GitHub',
              'Visual Studio Code',
              'Figma',
              'Storybook',
              'BigQuery',
              'Standard SQL',
              'Google Sheets',
            ],
            description: [
              'Developed the frontend of the company’s referral marketing web platform and documentation site using React with Typescript.',
              'Used Storybook to document code segments, promoting component reusability and ensuring adherence to the company’s frontend coding standards.',
              'Completed frontend and backend quality assurance.',
              'Collaborated with UI/UX designers to provide input on design choices and ensure clear communication and smooth handovers with the development team.',
              'Created quantitative data analysis reports using BigQuery with SQL.',
              'Led and executed key research projects for the company, including UX, market, competitor, user, and customer research.',
            ],
          },
        ]}
      />
    </ContentPageContainer>
  )
}
