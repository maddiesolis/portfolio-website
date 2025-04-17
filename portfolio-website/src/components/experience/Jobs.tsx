import { FC, useState } from 'react'
import { Box, Card, Collapsible, HStack, Image, List, Separator, Stack } from '@chakra-ui/react'
import { JobListProps, JobProps } from '../props'
import { DateRange, Label, PageSubHeader, Paragraph, SectionHeader } from '../typography'
import { JobSectionContainer } from '../containers'
import '@/css/animations.css'
import { Tags } from '../shared/Tags'
import { sizing } from '../shared/sizing'
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
    <Card.Root size="sm" borderColor={'border.light'}>
      <Card.Body alignItems={'start'} gap={sizing.gap.small}>
        <Stack gap={sizing.gap.xsmall}>
          <HStack gap={sizing.gap.small}>
            <ExternalLink href={companyUrl}>
              <Image
                src={logo}
                alt={company}
                width={sizing.width.companyLogo}
                height="full"
                objectFit={'contain'}
              />
            </ExternalLink>
            <Stack>
              <PageSubHeader
                _hover={{
                  cursor: 'pointer',
                  color: 'brand.secondary.hover',
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
        <Separator w="full" />
        <Paragraph>{brief}</Paragraph>
        <Separator w="full" />
        <JobSectionContainer title="Technologies">
          <Tags items={technologies} />
        </JobSectionContainer>
        <Separator w="full" />
        <Collapsible.Root unmountOnExit>
          {/* Todo: Move to different file so this entire file doesn't have to be CSR */}
          <JobSectionContainer title="Full description">
            <Collapsible.Trigger
              aria-label="expand full description"
              onClick={() => setIsExpanded(!isExpanded)}
              _hover={{
                color: 'brand.tertiary.hover',
                cursor: 'pointer',
              }}
            >
              <Label color={'brand.tertiary.neutral'}>
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
