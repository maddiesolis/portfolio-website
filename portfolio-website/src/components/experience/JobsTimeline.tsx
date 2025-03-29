'use client'

import { FC } from 'react'
import { JobProps } from '../props'
import { HStack, IconButton, Stack, Timeline } from '@chakra-ui/react'
import { Job } from './Job'
import { SectionHeader } from '../typography'
import { BiLinkExternal } from 'react-icons/bi'

export const JobsTimeline: FC<{ jobs: JobProps[] }> = ({ jobs }) => {
  return (
    <Stack gap={{ base: 4, md: 5, lg: 6 }}>
      <SectionHeader>
        Full resume
        <IconButton
          aria-label={'link to full resume'}
          // Todo: add link to full resume
          onClick={() => window.open('example.com', '_blank')}
          h={{ base: 4, md: 4.5, lg: 5 }}
          color="black"
          bg="none"
          _hover={{
            color: 'gray.500',
          }}
        >
          <BiLinkExternal
            style={{
              width: '100%',
              height: '100%',
            }}
          />
        </IconButton>
      </SectionHeader>
      <Timeline.Root size={'md'}>
        {/* Todo: Look into using Chakra For function */}
        {jobs.map((job, index) => (
          <Timeline.Item key={index}>
            <Timeline.Title whiteSpace="nowrap">{job.dates[0].endYear}</Timeline.Title>
            <Timeline.Connector>
              <Timeline.Separator />
              <Timeline.Indicator />
            </Timeline.Connector>
            <Timeline.Content>
              <Job
                title={job.title}
                company={job.company}
                dates={job.dates}
                brief={job.brief}
                technologies={job.technologies}
                description={job.description}
              />
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline.Root>
    </Stack>
  )
}
