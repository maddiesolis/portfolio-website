import { FC } from 'react'
import { SkillListProps, SkillProps } from '../props'
import { Card, Image, Wrap } from '@chakra-ui/react'
import { Label, PageSubHeader } from '../typography'
import { ContentPageSectionContainer } from '../containers'

const Skill: FC<SkillProps> = ({ name, url }) => {
  return (
    <Card.Root alignItems={'center'} variant="outline" w={{ base: 14, md: 20, lg: 20 }} p={1}>
      {/* Todo: Use next image? */}
      <Image alt="skill icon" src={url} width={{ base: 9, md: 11, lg: 12 }} />
      <Label>{name}</Label>
    </Card.Root>
  )
}

export const Skills: FC<SkillListProps> = ({ skills }) => {
  return (
    <ContentPageSectionContainer>
      <PageSubHeader>Skills</PageSubHeader>
      <Wrap gap={{ base: 3, md: 4, lg: 6 }}>
        {skills.map(skill => (
          <Skill key={skill.name} name={skill.name} url={skill.url} />
        ))}
      </Wrap>
    </ContentPageSectionContainer>
  )
}
