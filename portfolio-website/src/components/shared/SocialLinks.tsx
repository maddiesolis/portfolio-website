'use client'

import { FC } from 'react'
import { HStack, IconButton, IconButtonProps } from '@chakra-ui/react'
import { SocialLinksProps } from '../props'
import { Tooltip } from './Tooltip'
import { sizing } from './sizing'

export const SocialLinks: FC<SocialLinksProps & IconButtonProps> = ({
  links,
  gap = sizing.gap.small,
  ...rest
}) => {
  return (
    <HStack gap={gap}>
      {links.map((link, index) => (
        <Tooltip content={link.label} key={index}>
          <IconButton
            aria-label={link.label}
            onClick={() => {
              if (link.navigateWithHref) {
                window.location.href = link.url
              } else {
                window.open(link.url, '_blank')
              }
            }}
            bg="none"
            color="black"
            _hover={{ color: 'gray.700' }}
            {...rest}
          >
            {link.icon}
          </IconButton>
        </Tooltip>
      ))}
    </HStack>
  )
}
