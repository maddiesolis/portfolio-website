'use client'

import { ChakraProvider, createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode'

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          primary: {
            50: { value: '#f0f9ff' },
            100: { value: '#e0f2fe' },
            200: { value: '#bae6fd' },
            300: { value: '#7dd3fc' },
            400: { value: '#38bdf8' },
            500: { value: '#0ea5e9' },
            600: { value: '#0284c7' },
            700: { value: '#0369a1' },
            800: { value: '#075985' },
            900: { value: '#0c4a6e' },
          },
          secondary: {
            50: { value: '#fdf2f8' },
            100: { value: '#fce7f3' },
            200: { value: '#fbcfe8' },
            300: { value: '#f9a8d4' },
            400: { value: '#f472b6' },
            500: { value: '#ec4899' },
            600: { value: '#db2777' },
            700: { value: '#be185d' },
            800: { value: '#9d174d' },
            900: { value: '#831843' },
          },
          tertiary: {
            50: { value: '#fff8f1' },
            100: { value: '#feecdc' },
            200: { value: '#fcd9bd' },
            300: { value: '#fdba8c' },
            400: { value: '#ff8a4c' },
            500: { value: '#ff5a1f' },
            600: { value: '#d03801' },
            700: { value: '#b43403' },
            800: { value: '#8a2c0d' },
            900: { value: '#73230d' },
          },
          accent: {
            50: { value: '#fff8f1' },
            100: { value: '#feecdc' },
            200: { value: '#fcd9bd' },
            300: { value: '#fdba8c' },
            400: { value: '#ff8a4c' },
            500: { value: '#ff5a1f' },
            600: { value: '#d03801' },
            700: { value: '#b43403' },
            800: { value: '#8a2c0d' },
            900: { value: '#73230d' },
          },
        },
      },
    },
    semanticTokens: {
      colors: {
        brand: {
          primary: {
            solid: { value: '{colors.brand.primary.500}', description: 'bold fill color' },
            contrast: {
              value: '{colors.brand.primary.100}',
              description: 'text color to go on solid color',
            },
            fg: {
              value: '{colors.brand.primary.700}',
              description: 'text color for dark backgrounds',
            },
            muted: {
              value: '{colors.brand.primary.100}',
              description: 'muted shade of the solid color',
            },
            subtle: {
              value: '{colors.brand.primary.200}',
              description: 'subtle shade of the solid color',
            },
            emphasized: {
              value: '{colors.brand.primary.300}',
              description: 'emphasized shade of the subtle color',
            },
            focusRing: {
              value: '{colors.brand.primary.500}',
              description: 'focus ring color when interactive element is focused',
            },
          },
        },
      },
    },
  },
})

const customSystem = createSystem(defaultConfig, customConfig)

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={customSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  )
}
