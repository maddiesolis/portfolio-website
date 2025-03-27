import { FC } from 'react'
import { ParentProps } from '../props'
import { Box } from '@chakra-ui/react'
import { PageSubHeader, Paragraph } from '../typography'

export const Biography: FC<ParentProps> = ({ children }) => {
  return (
    <Box>
      <PageSubHeader>Biography</PageSubHeader>
      <Paragraph>{children}</Paragraph>
    </Box>
  )
}
