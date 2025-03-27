import { Box } from '@chakra-ui/react'

export default function CorePagesLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box m="4" p="4" border="1px solid green">
      Core Pages Layout
      {children}
    </Box>
  )
}
