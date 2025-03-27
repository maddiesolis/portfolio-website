import { FC } from 'react'
import { ParentProps } from '../props'
import { Box } from '@chakra-ui/react'

export const JobSectionContainer: FC<ParentProps> = ({ children }) => {
  return <Box gap="4rem">{children}</Box>
}
