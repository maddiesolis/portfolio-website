import { FC } from 'react'
import { SkillListProps, SkillProps } from '../props'
import { Card, Image, Wrap } from '@chakra-ui/react'
import { Label, PageSubHeader } from '../typography'
import { ContentPageSectionContainer } from '../containers'
import Link from 'next/link'

const Skill: FC<SkillProps> = ({ name, imageSrc, skillUrl }) => {
  return (
    <Link aria-label={`${name} website`} href={skillUrl} target="_blank" rel="noopener noreferrer">
      <Card.Root
        variant="outline"
        alignItems={'center'}
        p={1}
        w={{ base: 14, md: 20, lg: 20 }}
        _hover={{
          bg: 'gray.50',
          borderColor: 'gray.300',
          transition: 'all 0.2s ease-in-out',
        }}
      >
        <Image alt="skill icon" src={imageSrc} width={{ base: 9, md: 11, lg: 12 }} />
        <Label>{name}</Label>
      </Card.Root>
    </Link>
  )
}

export const Skills: FC<SkillListProps> = ({ skills }) => {
  return (
    <ContentPageSectionContainer>
      <PageSubHeader>Skills</PageSubHeader>
      <Wrap gap={{ base: 3, md: 4, lg: 6 }}>
        {skills.map(skill => (
          <Skill
            key={skill.name}
            name={skill.name}
            imageSrc={skill.imageSrc}
            skillUrl={skill.skillUrl}
          />
        ))}
      </Wrap>
    </ContentPageSectionContainer>
  )
}
