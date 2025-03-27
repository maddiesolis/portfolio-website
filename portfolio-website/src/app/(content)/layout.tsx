import { Box } from '@chakra-ui/react'

export default function ContentPagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box m="4" p="4" border="1px solid green">
      Content Pages Layout
      {children}
    </Box>
  )
}
