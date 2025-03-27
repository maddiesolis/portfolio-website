import { FC } from 'react'
import { SkillListProps, SkillProps } from '../props'

import { Box, Card, Image, Wrap } from '@chakra-ui/react'
import { Label, PageSubHeader } from '../typography'

const Skill: FC<SkillProps> = ({ name, url }) => {
  return (
    <Card.Root
      size={'sm'}
      variant={'outline'}
      p={2}
      w={{ base: '5rem', md: '6rem', lg: '6rem' }}
      alignItems={'center'}
    >
      {/* Todo: Use next image? */}
      <Image alt="skill icon" src={url} width={{ base: '2rem', md: '3rem', lg: '3rem' }} />
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
