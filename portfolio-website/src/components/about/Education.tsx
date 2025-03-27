import { FC } from 'react'
import { EducationListProps } from '../props'
import { Box } from '@chakra-ui/react'
import { PageSubHeader, Paragraph, SectionHeader } from '../typography'

export const Education: FC<EducationListProps> = ({ educations }) => {
  return (
    <Box>
      <PageSubHeader>Education</PageSubHeader>
      {educations.map((education, index) => (
        <Box key={index}>
          <SectionHeader>
            {education.institution} - {education.degree}
          </SectionHeader>
          <Paragraph>
            {education.startMonth} {education.startYear} - {education.endMonth} {education.endYear}
          </Paragraph>
          <Paragraph>{education.major}</Paragraph>
        </Box>
      ))}
    </Box>
  )
}
