import { Box, Card, Image, List, Tabs, Wrap } from '@chakra-ui/react'
import { FC } from 'react'
import {
  AwardListProps,
  EducationListProps,
  LanguageListProps,
  ParentProps,
  SkillListProps,
  SkillProps,
} from './props'
import { Label, PageSubHeader, Paragraph, SectionHeader } from './typography'
import { BiLinkExternal } from 'react-icons/bi'
import { CustomIconButton } from './icon-button'

export const Biography: FC<ParentProps> = ({ children }) => {
  return (
    <Box>
      <PageSubHeader>Biography</PageSubHeader>
      <Paragraph>{children}</Paragraph>
    </Box>
  )
}

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

export const Languages: FC<LanguageListProps> = ({ languages }) => {
  return (
    <Tabs.Root defaultValue={languages[0].name} variant={'line'}>
      <Tabs.List aria-label="view languages">
        {languages.map((language, index) => (
          <Tabs.Trigger key={index} value={language.name} p={4}>
            <SectionHeader>{language.name}</SectionHeader>
          </Tabs.Trigger>
        ))}
      </Tabs.List>
      {languages.map((language, index) => (
        <Tabs.Content key={index} value={language.name} mt={2}>
          <Card.Root size={'sm'} variant={'outline'} p={2}>
            <Paragraph>{language.descriptionInLanguage}</Paragraph>
            <Paragraph>{language.descriptionInEnglish}</Paragraph>
          </Card.Root>
        </Tabs.Content>
      ))}
    </Tabs.Root>
  )
}

const Skill: FC<SkillProps> = ({ name, url }) => {
  return (
    <Card.Root
      size={'sm'}
      variant={'outline'}
      p={2}
      w={{ base: '5rem', md: '6rem', lg: '6rem' }}
      alignItems={'center'}
    >
      <Image src={url} width={{ base: '2rem', md: '3rem', lg: '3rem' }} />
      <Label>{name}</Label>
    </Card.Root>
  )
}

export const Skills: FC<SkillListProps> = ({ skills }) => {
  return (
    <Box>
      <PageSubHeader>Skills</PageSubHeader>
      <Wrap>
        {skills.map(skill => (
          <Skill key={skill.name} name={skill.name} url={skill.url} />
        ))}
      </Wrap>
    </Box>
  )
}

export const Awards: FC<AwardListProps> = ({ awards }) => {
  return (
    <Box>
      <PageSubHeader>Awards</PageSubHeader>
      <List.Root>
        {awards.map((award, index) => (
          <List.Item key={index}>
            <Paragraph key={index}>
              {award.title} ({award.year})
              {award.url && (
                <CustomIconButton
                  aria-label="link to award"
                  onClick={() => window.open(award.url, '_blank')}
                  color="black"
                  _hover={{
                    color: 'gray.500',
                  }}
                >
                  <BiLinkExternal />
                </CustomIconButton>
              )}
            </Paragraph>
          </List.Item>
        ))}
      </List.Root>
    </Box>
  )
}
