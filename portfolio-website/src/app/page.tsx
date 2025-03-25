import { Box, Button, Heading, Link } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box p={4}>
      <Button variant={'subtle'} colorPalette={'brand.primary'}>
        Click me
      </Button>
      <Heading color={'brand.primary.emphasized'}>Hello world</Heading>
      <Link colorPalette={'brand.primary'} href={'#'}>
        Learn more
      </Link>
    </Box>
  )
}
