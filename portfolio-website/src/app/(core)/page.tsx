import { Keywords } from '@/components/Keywords'
import { Title } from '@/components/typography'
import { Box, Image, VStack } from '@chakra-ui/react'
import '@/css/animations.css'
import { sizing } from '@/components/shared/sizing'

export default function Home() {
  return (
    <VStack gap={sizing.gap.medium}>
      <Image className="fadeIn" src="/svg/desk.svg" alt="homepage image" />
      <VStack gap={sizing.gap.xxsmall}>
        <Box className="fadeIn">
          <Title>Madeline Solis de Ovando</Title>
        </Box>
        <Keywords keywords={['Developer', 'Designer', 'Artist']} />
      </VStack>
    </VStack>
  )
}
