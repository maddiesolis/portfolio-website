import { FC } from 'react'
import { AchievementListProps } from '../props'
import { List } from '@chakra-ui/react'
import { Paragraph } from '../typography'
import { BiLinkExternal } from 'react-icons/bi'
import { ContentPageSectionContainer } from '../shared/ContentPageContainers'
import { sizing } from '../../globalVariables'
import { IconLink } from '../shared/IconLink'

export const Achievements: FC<AchievementListProps> = ({ achievements }) => {
  return (
    <ContentPageSectionContainer title="Achievements & Volunteering">
      <List.Root ml={4.5}>
        {achievements.map((a, index) => (
          <List.Item key={index}>
            <Paragraph lineHeight={'taller'}>
              {a.title} ({a.year})
              {a.url && (
                <IconLink href={a.url} h={sizing.height.smallIcon}>
                  <BiLinkExternal
                    style={{
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </IconLink>
              )}
            </Paragraph>
          </List.Item>
        ))}
      </List.Root>
    </ContentPageSectionContainer>
  )
}
