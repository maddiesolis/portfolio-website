import { FC } from 'react'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { TbCircleLetterM } from 'react-icons/tb'
import '@/css/animations.css'
import Link from 'next/link'
import { sizing } from './shared/sizing'

export const Logo: FC = () => {
  return (
    <Box
      className="slideInLeftSmall"
      animationDelay={`2.5s`}
      animationFillMode={'both'}
      color={'brand.secondary.neutral'}
      _hover={{ color: 'brand.secondary.hover' }}
      h={sizing.height.logoIcon}
      w="fit-content"
    >
      <Link href={'/'}>
        <TbCircleLetterM style={{ width: '100%', height: '100%' }} />
      </Link>
    </Box>
  )
}
