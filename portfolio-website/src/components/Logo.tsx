import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { TbCircleLetterM } from 'react-icons/tb'
import '@/css/animations.css'
import Link from 'next/link'

export const Logo: FC = () => {
  return (
    <Box className="slideInLeftSmall" animationDelay={`2.5s`} animationFillMode={'both'}>
      <Link href={'/'}>
        <Box
          color={'brand.secondary.neutral'}
          _hover={{ color: 'brand.secondary.hover' }}
          h={{ base: 6, md: 7, lg: 8 }}
          w="fit-content"
        >
          <TbCircleLetterM style={{ width: '100%', height: '100%' }} />
        </Box>
      </Link>
    </Box>
  )
}
