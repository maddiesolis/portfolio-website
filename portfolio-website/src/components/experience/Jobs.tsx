'use client'

import { FC, useState } from 'react'
import {
  Box,
  Card,
  Collapsible,
  HStack,
  Image,
  List,
  Separator,
  Stack,
  Tag,
  VStack,
  Wrap,
} from '@chakra-ui/react'
import { JobListProps, JobProps } from '../props'
import { DateRange, Label, PageSubHeader, Paragraph, SectionHeader } from '../typography'
import { BiLinkExternal } from 'react-icons/bi'
import { JobSectionContainer } from '../containers'
import Link from 'next/link'
import { keyframes } from '@emotion/react'

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
    <Card.Root size="sm" borderColor={'gray.400'}>
      <Card.Body alignItems={'start'} gap={{ base: 4, md: 5, lg: 6 }}>
        {/* Todo: Figure out good strategy for global spacing */}
        <VStack alignItems={'start'}>
          <HStack gap={{ base: 4, md: 5, lg: 8 }}>
            <Link href={companyUrl} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo}
                alt={company}
                width={{ base: 16, md: 20, lg: 24 }}
                height="full"
                objectFit={'contain'}
              />
            </Link>
            <Stack gap={{ base: 0.5, md: 0.5, lg: 1 }}>
              <PageSubHeader
                _hover={{
                  cursor: 'pointer',
                  color: 'gray.700',
                }}
                textDecoration="underline"
              >
                <Link href={companyUrl} target="_blank" rel="noopener noreferrer">
                  {company}
                </Link>
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
        </VStack>
        <Separator w="full" />
        <Paragraph>{brief}</Paragraph>
        <Separator w="full" />
        <JobSectionContainer title="Technologies">
          {/* Todo: Make this a shared tag group component with Project.tsx */}
          <Wrap>
            {technologies.map((technology, index) => (
              <Tag.Root key={index} rounded={'full'} variant={'outline'} border={'1px solid black'}>
                <Label>{technology}</Label>
              </Tag.Root>
            ))}
          </Wrap>
        </JobSectionContainer>
        <Separator w="full" />
        <Collapsible.Root unmountOnExit>
          <JobSectionContainer title="Full description">
            <Collapsible.Trigger
              aria-label="expand full description"
              onClick={() => setIsExpanded(!isExpanded)}
              // Todo: Make shared hover state
              _hover={{
                color: 'gray.500',
                cursor: 'pointer',
              }}
            >
              <Label color={'gray.500'}>{isExpanded ? 'Click to hide' : 'Click to expand'}</Label>
            </Collapsible.Trigger>
            <Collapsible.Content>
              <List.Root ml={4.5} gap={{ base: 0.5, md: 1, lg: 1 }}>
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

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(5%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`

export const Jobs: FC<JobListProps> = ({ jobs, resumeUrl }) => {
  return (
    <Stack gap={{ base: 4, md: 5, lg: 6 }}>
      {resumeUrl && (
        <Link
          aria-label="link to full resume"
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <SectionHeader>Full resume</SectionHeader>
          <Box h={{ base: 4, md: 4.5, lg: 5 }}>
            <BiLinkExternal
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </Link>
      )}
      {jobs.map((job, index) => (
        <Box key={index} animation={`${slideIn} 0.4s ease-in-out ${index * 0.3}s both`}>
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
