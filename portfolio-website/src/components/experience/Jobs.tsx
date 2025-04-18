'use client'

import { FC, useState } from 'react'
import { Box, Card, Collapsible, HStack, List, Separator, Stack } from '@chakra-ui/react'
import { JobListProps, JobProps } from '../props'
import { DateRange, Label, PageSubHeader, Paragraph, SectionHeader } from '../typography'
import { JobSectionContainer } from '../containers'
import '@/css/animations.css'
import { Tags } from '../shared/Tags'
import { sizing } from '../../globalVariables'
import { ExternalLink } from '../shared/ExternalLink'

const Job: FC<JobProps> = ({
  title,
  company,
  companyUrl,
  logo,
  dates,
  brief,
  technologies,
  description,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <Card.Root size="sm" bg="none" borderColor={'border.light.default'}>
      <Card.Body alignItems={'start'} gap={sizing.gap.small}>
        <Stack gap={sizing.gap.xsmall}>
          <HStack gap={sizing.gap.small}>
            <ExternalLink href={companyUrl}>
              <Box width={sizing.width.companyLogo}>{logo}</Box>
            </ExternalLink>
            <Stack gap={sizing.gap.xxxsmall}>
              <PageSubHeader
                _hover={{
                  cursor: 'pointer',
                  color: 'text.subheader.hover',
                }}
                textDecoration="underline"
              >
                <ExternalLink href={companyUrl}>{company}</ExternalLink>
              </PageSubHeader>
              <SectionHeader>{title}</SectionHeader>
            </Stack>
          </HStack>
          <Stack gap={0}>
            {dates.map((date, index) => (
              <DateRange key={index}>
                {date.startMonth} {date.startYear} - {date.endMonth} {date.endYear} (
                {date.employmentType})
              </DateRange>
            ))}
          </Stack>
        </Stack>
        {/* Todo: shared separator component */}
        <Separator w="full" borderColor={'separator.default'} />
        <Paragraph>{brief}</Paragraph>
        <Separator w="full" borderColor={'separator.default'} />
        <JobSectionContainer title="Technologies">
          <Tags items={technologies} />
        </JobSectionContainer>
        <Separator w="full" borderColor={'separator.default'} />
        <Collapsible.Root unmountOnExit>
          {/* Todo: Move to different file so this entire file doesn't have to be CSR */}
          <JobSectionContainer title="Full description">
            <Collapsible.Trigger onClick={() => setIsExpanded(!isExpanded)}>
              <Label
                color={'text.subtle.default'}
                _hover={{ color: 'text.subtle.hover', cursor: 'pointer' }}
              >
                {isExpanded ? 'Click to hide' : 'Click to expand'}
              </Label>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <List.Root ml={4.5} gap={sizing.gap.xxsmall}>
                {description.map((item, index) => (
                  <List.Item key={index}>
                    <Paragraph>{item}</Paragraph>
                  </List.Item>
                ))}
              </List.Root>
            </Collapsible.Content>
          </JobSectionContainer>
        </Collapsible.Root>
      </Card.Body>
    </Card.Root>
  )
}

export const Jobs: FC<JobListProps> = ({ jobs }) => {
  return (
    <Stack gap={sizing.gap.medium}>
      {jobs.map((job, index) => (
        <Box
          key={index}
          className="slideInRightFast"
          animationDelay={`${0.5 + index * 0.3}s`}
          animationFillMode={'both'}
        >
          <Job
            key={index}
            title={job.title}
            company={job.company}
            companyUrl={job.companyUrl}
            logo={job.logo}
            dates={job.dates}
            brief={job.brief}
            technologies={job.technologies}
            description={job.description}
          />
        </Box>
      ))}
    </Stack>
  )
}
