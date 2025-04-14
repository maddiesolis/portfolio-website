'use client'

import { FC } from 'react'
import { AchievementListProps } from '../props'
import { IconButton, List } from '@chakra-ui/react'
import { Paragraph } from '../typography'
import { BiLinkExternal } from 'react-icons/bi'
import { ContentPageSectionContainer } from '../shared/ContentPageContainers'

export const Achievements: FC<AchievementListProps> = ({ achievements }) => {
  return (
    <ContentPageSectionContainer id="awards" title="Achievements & Volunteering">
      <List.Root ml={4.5}>
        {achievements.map((a, index) => (
          <List.Item key={index}>
            <Paragraph lineHeight={'taller'}>
              {a.title} ({a.year})
              {a.url && (
                <IconButton
                  aria-label={`link to ${a.title}`}
                  onClick={() => window.open(a.url, '_blank')}
                  h={{ base: 4, md: 4.5, lg: 5 }}
                  color="black"
                  bg="none"
                  _hover={{
                    color: 'gray.500',
                  }}
                >
                  <BiLinkExternal
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </IconButton>
              )}
            </Paragraph>
          </List.Item>
        ))}
      </List.Root>
    </ContentPageSectionContainer>
  )
}
