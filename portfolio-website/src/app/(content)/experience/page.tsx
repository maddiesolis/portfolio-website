import { ContentPageContainer } from '@/components/containers'
import { JobsTimeline } from '@/components/experience/JobsTimeline'

export default function Experience() {
  return (
    <ContentPageContainer title="Experience">
      <JobsTimeline
        jobs={[
          {
            // Todo: Add link to company
            title: 'Job Title',
            company: 'Company Name',
            dates: [
              // Todo: Add employment type
              { startMonth: 'January', startYear: '2024', endMonth: 'February', endYear: '2025' },
              { startMonth: 'March', startYear: '2021', endMonth: 'April', endYear: '2022' },
              { startMonth: 'March', startYear: '2021', endMonth: 'April', endYear: '2022' },
            ],
            brief:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, eros vitae bibendum laoreet, turpis mi pharetra lacus, nec vestibulum nulla velit non nulla.',
            technologies: [
              'React',
              'Node.js',
              'Python',
              'Java',
              'C++',
              'JavaScript',
              'TypeScript',
              'HTML',
              'CSS',
              'SQL',
              'NoSQL',
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
          {
            title: 'Job Title',
            company: 'Company Name',
            dates: [
              { startMonth: 'January', startYear: '2024', endMonth: 'February', endYear: '2025' },
            ],
            brief:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis, eros vitae bibendum laoreet, turpis mi pharetra lacus, nec vestibulum nulla velit non nulla.',
            technologies: ['React', 'Node.js', 'Python', 'Java', 'C++', 'JavaScript'],
            description: [
              'Developed the frontend of the company’s referral marketing web platform and documentation site using React with Typescript.',
              'Used Storybook to document code segments, promoting component reusability and ensuring adherence to the company’s frontend coding standards.',
              'Completed frontend and backend quality assurance.',
            ],
          },
        ]}
      />
    </ContentPageContainer>
  )
}
