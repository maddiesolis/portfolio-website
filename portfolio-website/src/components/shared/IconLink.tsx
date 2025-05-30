import { FC } from 'react'
import { ExternalLinkProps, ParentProps } from '../props'
import { IconButton, IconButtonProps } from '@chakra-ui/react'
import { ExternalLink } from './ExternalLink'

export const IconLink: FC<ParentProps & IconButtonProps & ExternalLinkProps> = ({
  href,
  children,
  navigateWithHref,
  ...rest
}) => {
  return (
    <ExternalLink href={href} navigateWithHref={navigateWithHref}>
      <IconButton
        bg="none"
        color="brand.primary.neutral"
        _hover={{ color: 'brand.primary.hover' }}
        {...rest}
      >
        {children}
      </IconButton>
    </ExternalLink>
  )
}
