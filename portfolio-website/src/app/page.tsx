import { Box, Button, Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box p={4}>
      <Heading>Hello world</Heading>
      <Button variant={'outline'}>click me</Button>
      <Box>
        <Heading>Hello</Heading>
      </Box>
    </Box>
  )
}
