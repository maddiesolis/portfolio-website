import { Keywords, PageHeader } from '@/components/typography'
import { VStack } from '@chakra-ui/react'

export default function Home() {
  return (
    <VStack>
      <PageHeader>Madeline Solis de Ovando</PageHeader>
      <Keywords keywords={['Developer', 'Designer', 'Artist']} />
    </VStack>
  )
}
