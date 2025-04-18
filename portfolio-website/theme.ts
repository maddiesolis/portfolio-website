import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: 'Quicksand, sans-serif' },
        body: { value: 'Quicksand, sans-serif' },
      },
      colors: {
        paper: {
          // 50: { value: '#FAF9F8' },
          50: { value: '#f8f6f5' },
          100: { value: '#F5F3F1' },
          200: { value: '#F1EFEC' }, // base color
          300: { value: '#E4E0DC' },
          400: { value: '#D6D2CE' },
          500: { value: '#C8C4C0' },
          600: { value: '#B9B5B1' },
          700: { value: '#A9A5A1' },
          800: { value: '#989491' },
          900: { value: '#86827F' },
        },
        ink: {
          50: { value: '#E5E5E5' },
          100: { value: '#CCCCCC' },
          200: { value: '#B2B2B2' },
          300: { value: '#999999' },
          400: { value: '#7F7F7F' },
          500: { value: '#666666' },
          600: { value: '#4C4C4C' },
          700: { value: '#333333' },
          800: { value: '#1A1A1A' },
          900: { value: '#030303' }, // base color
        },

        paint: {
          blue: {
            50: { value: '#E3E7EF' },
            100: { value: '#C6CFDF' },
            200: { value: '#A9B7CF' },
            300: { value: '#8D9EBF' },
            400: { value: '#7086AF' },
            500: { value: '#5f77a5' },
            600: { value: '#123458' }, // base color
            700: { value: '#0F2C4A' },
            800: { value: '#0C233C' },
            900: { value: '#091B2E' },
          },
          beige: {
            50: { value: '#F6F4F2' },
            100: { value: '#ECE7E1' },
            200: { value: '#E1DAD1' },
            300: { value: '#D7CDC0' },
            400: { value: '#CCBFAD' },
            500: { value: '#D4C9BE' }, // base color
            600: { value: '#B4A99E' },
            700: { value: '#95897F' },
            800: { value: '#756A60' },
            900: { value: '#564B42' },
          },
        },
      },
    },
    semanticTokens: {
      colors: {
        background: {
          default: { value: '{colors.paper.50}' },
          hover: { value: '{colors.paper.100}' },
        },
        text: {
          title: {
            default: { value: '{colors.ink.600}' },
            hover: { value: '{colors.ink.700}' },
          },
          keyword: {
            default: { value: '{colors.paint.blue.400}' },
            hover: { value: '{colors.paint.blue.500}' },
          },
          nav: {
            default: { value: '{colors.paint.beige.700}' },
            hover: { value: '{colors.paint.beige.800}' },
          },
          header: {
            default: { value: '{colors.ink.600}' },
            hover: { value: '{colors.ink.700}' },
          },
          subheader: {
            default: { value: '{colors.paint.blue.400}' },
            hover: { value: '{colors.paint.blue.500}' },
          },
          sectionheader: {
            default: { value: '{colors.ink.600}' },
            hover: { value: '{colors.ink.700}' },
          },
          body: {
            default: { value: '{colors.ink.600}' },
            hover: { value: '{colors.ink.700}' },
          },
          subtle: {
            default: { value: '{colors.ink.400}' },
            hover: { value: '{colors.ink.500}' },
          },
        },
        separator: {
          default: { value: '{colors.ink.100}' },
          hover: { value: '{colors.ink.200}' },
        },
        border: {
          light: {
            default: { value: '{colors.ink.200}' },
            hover: { value: '{colors.ink.300}' },
          },
          dark: {
            default: { value: '{colors.ink.900}' },
            hover: { value: '{colors.ink.800}' },
          },
        },
        icon: {
          default: { value: '{colors.ink.600}' },
          hover: { value: '{colors.ink.700}' },
        },
      },
    },
  },
})

const customSystem = createSystem(defaultConfig, customConfig)

export default customSystem
