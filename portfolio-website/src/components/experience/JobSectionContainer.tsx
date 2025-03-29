import { FC } from 'react'
import { ParentProps } from '../props'
import { Stack } from '@chakra-ui/react'

export const JobSectionContainer: FC<ParentProps> = ({ children }) => {
  return (
    <Stack gap={{ base: 2, md: 2.5, lg: 3 }} alignItems={'start'}>
      {children}
    </Stack>
  )
}
