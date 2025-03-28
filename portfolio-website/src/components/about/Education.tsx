import { FC } from 'react'
import { EducationListProps } from '../props'
import { Box, Stack } from '@chakra-ui/react'
import { EducationDates, PageSubHeader, Paragraph, SectionHeader } from '../typography'
import { ContentPageSectionContainer } from '../containers'

export const Education: FC<EducationListProps> = ({ educations }) => {
  return (
    <ContentPageSectionContainer>
      <PageSubHeader>Education</PageSubHeader>
      {educations.map((education, index) => (
        <Stack key={index} gap={{ base: 1, md: 1.5, lg: 2 }}>
          <SectionHeader>
            {education.institution} - {education.degree}
          </SectionHeader>
          <EducationDates>
            {education.startMonth} {education.startYear} - {education.endMonth} {education.endYear}
          </EducationDates>
          <Paragraph>{education.major}</Paragraph>
        </Stack>
      ))}
    </ContentPageSectionContainer>
  )
}
