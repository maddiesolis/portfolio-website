import { VStack } from '@chakra-ui/react'
import { FC } from 'react'
import { ParentProps } from '../props'
import '@/css/animations.css'
import { sizing } from '../../globalVariables'

export const ContactPageContainer: FC<ParentProps> = ({ children }) => {
  return (
    <VStack className="fadeIn" gap={sizing.gap.medium}>
      {children}
    </VStack>
  )
}
