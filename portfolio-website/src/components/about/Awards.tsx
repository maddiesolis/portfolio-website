'use client'

import { FC } from 'react'
import { AwardListProps } from '../props'
import { Box, List } from '@chakra-ui/react'
import { PageSubHeader, Paragraph } from '../typography'
import { CustomIconButton } from '../custom/CustomIconButton'
import { BiLinkExternal } from 'react-icons/bi'

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
