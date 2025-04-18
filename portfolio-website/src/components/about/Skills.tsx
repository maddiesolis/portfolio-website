import { FC } from 'react'
import { SkillListProps, SkillProps } from '../props'
import { Card, Image, Wrap } from '@chakra-ui/react'
import { Label } from '../typography'
import Link from 'next/link'
import { ContentPageSectionContainer } from '../shared/ContentPageContainers'
import { sizing } from '../../globalVariables'

const Skill: FC<SkillProps> = ({ name, imageSrc, skillUrl }) => {
  return (
    <Link aria-label={`${name} website`} href={skillUrl} target="_blank" rel="noopener noreferrer">
      <Card.Root
        variant="outline"
        alignItems={'center'}
        justifyContent={'center'}
        p={2}
        gap={2}
        w={sizing.width.skillCard}
        minH={sizing.height.skillCard}
        borderColor={'border.light'}
        _hover={{
          bg: 'background.hover',
        }}
      >
        <Image alt="skill icon" src={imageSrc} height={sizing.height.skillLogo} />
        <Label>{name}</Label>
      </Card.Root>
    </Link>
  )
}

export const Skills: FC<SkillListProps> = ({ skills }) => {
  return (
    <ContentPageSectionContainer title="Skills">
      <Wrap gap={sizing.gap.small}>
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
