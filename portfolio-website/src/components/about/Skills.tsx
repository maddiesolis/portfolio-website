import { FC } from 'react'
import { SkillListProps, SkillProps } from '../props'
import { Box, Card, Wrap } from '@chakra-ui/react'
import { Label } from '../typography'
import Link from 'next/link'
import { ContentPageSectionContainer } from '../shared/ContentPageContainers'
import { sizing } from '../../globalVariables'

const Skill: FC<SkillProps> = ({ name, skillUrl, svg }) => {
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
        <Box height={sizing.height.skillLogo}>{svg}</Box>
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
          <Skill key={skill.name} name={skill.name} skillUrl={skill.skillUrl} svg={skill.svg} />
        ))}
      </Wrap>
    </ContentPageSectionContainer>
  )
}
