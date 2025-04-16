import { FC } from 'react'
import { SkillListProps, SkillProps } from '../props'
import { Card, Image, Wrap } from '@chakra-ui/react'
import { Label } from '../typography'
import Link from 'next/link'
import { ContentPageSectionContainer } from '../shared/ContentPageContainers'

const Skill: FC<SkillProps> = ({ name, imageSrc, skillUrl }) => {
  return (
    <Link aria-label={`${name} website`} href={skillUrl} target="_blank" rel="noopener noreferrer">
      <Card.Root
        variant="outline"
        alignItems={'center'}
        justifyContent={'center'}
        p={2}
        gap={2}
        w={{ base: 16, md: 20, lg: 24 }}
        minH={{ base: 18, md: 24, lg: 24 }}
        borderColor={'gray.400'}
        _hover={{
          bg: 'gray.50',
        }}
      >
        <Image alt="skill icon" src={imageSrc} height={{ base: 9, md: 11, lg: 12 }} />
        <Label>{name}</Label>
      </Card.Root>
    </Link>
  )
}

export const Skills: FC<SkillListProps> = ({ skills }) => {
  return (
    <ContentPageSectionContainer id="skills" title="Skills">
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
