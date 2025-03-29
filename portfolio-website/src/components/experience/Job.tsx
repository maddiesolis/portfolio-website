'use client'

import { FC, useState } from 'react'
import { Card, Collapsible, List, Stack, Tag, Wrap } from '@chakra-ui/react'
import { JobProps } from '../props'
import { JobSectionContainer } from './JobSectionContainer'
import { Label, Paragraph, SectionHeader } from '../typography'

export const Job: FC<JobProps> = ({ title, company, dates, brief, technologies, description }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  return (
    <Card.Root size="sm">
      <Card.Body alignItems={'start'} gap={{ base: 4, md: 5, lg: 6 }}>
        {/* Todo: Figure out good strategy for global spacing */}
        <Stack gap={{ base: 0.5, md: 0.5, lg: 1 }}>
          <SectionHeader>
            <strong>{title}</strong> | {company}
          </SectionHeader>
          <Stack gap={0}>
            {dates.map((date, index) => (
              <Label key={index} textTransform={'uppercase'} color={'gray.600'}>
                {date.startMonth} {date.startYear} - {date.endMonth} {date.endYear}
              </Label>
            ))}
          </Stack>
        </Stack>
        <Paragraph>{brief}</Paragraph>
        <JobSectionContainer>
          <SectionHeader>Technologies</SectionHeader>
          {/* Todo: Make this a shared tag group component with Project.tsx */}
          <Wrap>
            {technologies.map((technology, index) => (
              <Tag.Root key={index} rounded={'full'} colorPalette={'blue'}>
                <Label>{technology}</Label>
              </Tag.Root>
            ))}
          </Wrap>
        </JobSectionContainer>
        <Collapsible.Root unmountOnExit>
          <JobSectionContainer>
            <SectionHeader>Full description</SectionHeader>
            <Collapsible.Trigger
              aria-label="expand full description"
              onClick={() => setIsExpanded(!isExpanded)}
              // Todo: Make shared hover state
              _hover={{
                color: 'gray.500',
                cursor: 'pointer',
              }}
            >
              {isExpanded ? 'Click to hide' : 'Click to expand'}
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
