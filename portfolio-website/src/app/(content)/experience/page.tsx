import { JobsTimeline } from '@/components/experience/JobsTimeline'
import { PageHeader } from '@/components/typography'
import { Stack } from '@chakra-ui/react'

export default function Experience() {
  return (
    <>
      <Stack>
        <PageHeader>Experience</PageHeader>
      </Stack>
      <JobsTimeline
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
    </>
  )
}
