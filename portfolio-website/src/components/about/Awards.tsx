'use client'

import { FC } from 'react'
import { AwardListProps } from '../props'
import { IconButton, List } from '@chakra-ui/react'
import { PageSubHeader, Paragraph } from '../typography'
import { BiLinkExternal } from 'react-icons/bi'
import { ContentPageSectionContainer } from '../containers'

export const Awards: FC<AwardListProps> = ({ awards }) => {
  return (
    <ContentPageSectionContainer>
      <PageSubHeader>Awards</PageSubHeader>
      <List.Root ml={4.5}>
        {awards.map((award, index) => (
          <List.Item key={index}>
            <Paragraph lineHeight={'taller'}>
              {award.title} ({award.year})
              {award.url && (
                <IconButton
                  aria-label={`link to ${award.title}`}
                  onClick={() => window.open(award.url, '_blank')}
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
