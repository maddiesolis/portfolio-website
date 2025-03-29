'use client'

import { FC } from 'react'
import { HStack, IconButton, IconButtonProps } from '@chakra-ui/react'
import { SocialLinksProps } from '../props'
import { Tooltip } from './Tooltip'

export const SocialLinks: FC<SocialLinksProps & IconButtonProps> = ({
  links,
  gap = { base: 2, md: 3, lg: 4 },
  ...rest
}) => {
  return (
    <HStack gap={gap}>
      {links.map((link, index) => (
        <Tooltip content={link.label} key={index}>
          <IconButton
            aria-label={link.label}
            onClick={() => window.open(link.url, '_blank')}
            bg="none"
            color="black"
            _hover={{ color: 'gray.500' }}
            {...rest}
          >
            {link.icon}
          </IconButton>
        </Tooltip>
      ))}
    </HStack>
  )
}
