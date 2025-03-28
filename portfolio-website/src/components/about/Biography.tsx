import { FC } from 'react'
import { ParentProps } from '../props'
import { PageSubHeader, Paragraph } from '../typography'
import { ContentPageSectionContainer } from '../containers'
import { Image } from '@chakra-ui/react'

export const Biography: FC<ParentProps> = ({ children }) => {
  return (
    <ContentPageSectionContainer>
      <PageSubHeader>Biography</PageSubHeader>
      <Paragraph>{children}</Paragraph>
    </ContentPageSectionContainer>
  )
}
