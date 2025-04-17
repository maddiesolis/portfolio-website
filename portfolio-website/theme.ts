import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Quicksand, sans-serif' },
        body: { value: 'Quicksand, sans-serif' },
      },
      colors: {
        brand: {
          primary: {
            neutral: { value: '#000000' },
            hover: { value: '#3f3f46' },
          },
          secondary: {
            neutral: { value: '#52525b' },
            hover: { value: '#27272a' },
          },
          tertiary: {
            neutral: { value: '#71717a' },
            hover: { value: '#52525b' },
          },
        },
        border: {
          light: { value: '#a1a1aa' },
          dark: { value: '#000000' },
        },
        background: {
          neutral: { value: '#ffffff' },
          hover: { value: '#fafafa' },
        },
      },
    },
  },
})

const customSystem = createSystem(defaultConfig, customConfig)

export default customSystem
