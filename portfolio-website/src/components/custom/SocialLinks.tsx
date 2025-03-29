'use client'

import { FC } from 'react'
import { HStack, IconButton, IconButtonProps } from '@chakra-ui/react'
import { SocialLinksProps } from '../props'

// Todo: Use this component in the Project card
export const SocialLinks: FC<SocialLinksProps & IconButtonProps> = ({
  links,
  gap = { base: 2, md: 3, lg: 4 },
  ...rest
}) => {
  return (
    <HStack gap={gap}>
      {links.map((link, index) => (
        <IconButton
          key={index}
          aria-label={link.label}
          onClick={() => window.open(link.url, '_blank')}
          bg="none"
          color="black"
          _hover={{ color: 'gray.500' }}
          {...rest}
        >
          {link.icon}
        </IconButton>
      ))}
    </HStack>
  )
}
