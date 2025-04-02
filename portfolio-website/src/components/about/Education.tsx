import { FC } from 'react'
import { EducationListProps } from '../props'
import { Stack } from '@chakra-ui/react'
import { DateRange, PageSubHeader, Paragraph } from '../typography'
import { ContentPageSectionContainer } from '../containers'

export const Education: FC<EducationListProps> = ({ educations }) => {
  return (
    <ContentPageSectionContainer id="education">
      <PageSubHeader>Education</PageSubHeader>
      {educations.map((education, index) => (
        <Stack key={index} gap={{ base: 1, md: 1.5, lg: 2 }}>
          <Paragraph fontWeight={'semibold'}>
            {education.institution} - {education.degree}
          </Paragraph>
          <DateRange>
            {education.startMonth} {education.startYear} - {education.endMonth} {education.endYear}
          </DateRange>
          <Paragraph>{education.major}</Paragraph>
        </Stack>
      ))}
    </ContentPageSectionContainer>
  )
}
