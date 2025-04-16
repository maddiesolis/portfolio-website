import { FC } from 'react'
import { Paragraph } from '../typography'
import { ContentPageSectionContainer } from '../shared/ContentPageContainers'
import { Box, Image } from '@chakra-ui/react'
import { ParentProps } from '../props'

export const Biography: FC<ParentProps> = ({ children }) => {
  return (
    <ContentPageSectionContainer id="biography" title="Biography">
      <Box position={'relative'}>
        <Image
          src="/svg/hello.svg"
          alt="biography svg"
          float={{ base: 'none', sm: 'right' }}
          ml={{ base: 0, sm: 2, md: 2, lg: 4 }}
          mb={4}
          w={{ base: '14rem', sm: '14rem', md: '14rem', lg: '20rem' }}
          h="fit-content"
          objectFit={'contain'}
        />
        <Paragraph>{children}</Paragraph>
      </Box>
    </ContentPageSectionContainer>
  )
}
