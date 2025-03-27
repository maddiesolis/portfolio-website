import { FC } from 'react'
import { JobProps } from '../props'
import { Timeline } from '@chakra-ui/react'
import { Job } from './Job'

export const JobsTimeline: FC<{ jobs: JobProps[] }> = ({ jobs }) => {
  return (
    <Timeline.Root variant={'outline'}>
      {jobs.map((job, index) => (
        <Timeline.Item key={index}>
          <Timeline.Connector>
            <Timeline.Separator />
            <Timeline.Indicator />
          </Timeline.Connector>
          <Timeline.Content>
            <Job {...job} />
          </Timeline.Content>
        </Timeline.Item>
      ))}
    </Timeline.Root>
  )
}
