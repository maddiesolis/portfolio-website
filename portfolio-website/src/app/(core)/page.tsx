import { Keywords } from '@/components/Keywords'
import { Title } from '@/components/typography'
import { Box, VStack } from '@chakra-ui/react'
import '@/css/animations.css'
import { sizing } from '@/globalVariables'
import DeskSvg from '@/components/svgs/DeskSvg'

export default function Home() {
  return (
    <VStack gap={sizing.gap.medium} w={'100%'} maxW={772}>
      <DeskSvg />
      <VStack gap={sizing.gap.xxsmall}>
        <Box className="fadeIn">
          <Title>Madeline Solis de Ovando</Title>
        </Box>
        <Keywords keywords={['Developer', 'Designer', 'Artist']} />
      </VStack>
    </VStack>
  )
}
