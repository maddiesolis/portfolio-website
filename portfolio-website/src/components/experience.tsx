import { FC, useState } from 'react'
import { JobProps, ParentProps } from './props'
import { Box, Card, Collapsible, HStack, List, Tag, Timeline, VStack } from '@chakra-ui/react'
import { Label, PageSubHeader, Paragraph, SectionHeader } from './typography'

const JobSectionContainer: FC<ParentProps> = ({ children }) => {
  return <Box gap="4rem">{children}</Box>
}

const Job: FC<JobProps> = ({ title, company, dates, brief, technologies, description }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <Card.Root size={'md'} variant={'outline'} p={4}>
      <JobSectionContainer>
        <VStack align="left">
          <HStack>
            <PageSubHeader>
              {title} | {company}
            </PageSubHeader>
          </HStack>
          <VStack align="left">
            {dates.map((date, index) => (
              <Label key={index}>
                {date.startMonth} {date.startYear} - {date.endMonth} {date.endYear}
              </Label>
            ))}
          </VStack>
        </VStack>
        <Paragraph>{brief}</Paragraph>
      </JobSectionContainer>
      <JobSectionContainer>
        <SectionHeader>Technologies</SectionHeader>
        {technologies.map((technology, index) => (
          <Tag.Root key={index}>
            <Tag.Label>{technology}</Tag.Label>
          </Tag.Root>
        ))}
      </JobSectionContainer>
      <JobSectionContainer>
        <Collapsible.Root unmountOnExit>
          <SectionHeader>Full description</SectionHeader>
          <Collapsible.Trigger onClick={() => setIsExpanded(!isExpanded)}>
            {isExpanded ? 'Click to hide' : 'Click to show'}
          </Collapsible.Trigger>
          <Collapsible.Content>
            <List.Root ml={5}>
              {description.map((item, index) => (
                <List.Item key={index}>
                  <Paragraph key={index}>{item}</Paragraph>
                </List.Item>
              ))}
            </List.Root>
          </Collapsible.Content>
        </Collapsible.Root>
      </JobSectionContainer>
    </Card.Root>
  )
}

export const Jobs: FC<{ jobs: JobProps[] }> = ({ jobs }) => {
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
