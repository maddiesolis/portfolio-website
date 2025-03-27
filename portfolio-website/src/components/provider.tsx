'use client'

import { ChakraProvider } from '@chakra-ui/react'
import customSystem from '../../theme'

interface ProviderProps {
  children: React.ReactNode
}

export function Provider({ children }: ProviderProps) {
  return <ChakraProvider value={customSystem}>{children}</ChakraProvider>
}
