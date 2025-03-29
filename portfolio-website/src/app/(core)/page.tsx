import { Keywords } from '@/components/home/Keywords'
import { Title } from '@/components/typography'
import { VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <VStack>
      <Title>Madeline Solis de Ovando</Title>
      <Keywords keywords={['Developer', 'Designer', 'Artist']} />
    </VStack>
  )
}
