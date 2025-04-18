import { FC } from 'react'
import { IconButton } from '@chakra-ui/react'
import React from 'react'
import { TbCircleLetterM } from 'react-icons/tb'
import '@/css/animations.css'
import Link from 'next/link'
import { sizing } from '../globalVariables'

export const Logo: FC = () => {
  return (
    <Link href={'/'}>
      <IconButton
        className="slideInLeftSmall"
        animationDelay={`2.5s`}
        animationFillMode={'both'}
        color={'text.nav.default'}
        _hover={{ color: 'text.nav.hover' }}
        h={sizing.height.logoIcon}
        bg="none"
      >
        <TbCircleLetterM style={{ width: '100%', height: '100%' }} />
      </IconButton>
    </Link>
  )
}
