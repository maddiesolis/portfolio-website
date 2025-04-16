import { Keywords } from '@/components/Keywords'
import { Title } from '@/components/typography'
import { Box, Image, VStack } from '@chakra-ui/react'
import '@/css/animations.css'

export default function Home() {
  return (
    <VStack gap={{ base: 2, md: 6, lg: 10 }}>
      <Image className="fadeIn" src="/svg/desk.svg" alt="homepage image" />
      <VStack>
        <Box className="fadeIn">
          <Title>Madeline Solis de Ovando</Title>
        </Box>
        <Keywords keywords={['Developer', 'Designer', 'Artist']} />
      </VStack>
    </VStack>
  )
}
