import { FC } from 'react'
import { HStack, IconButtonProps } from '@chakra-ui/react'
import { SocialLinksProps } from '../props'
import { sizing } from './sizing'
import { IconLink } from './IconLink'

export const SocialLinks: FC<SocialLinksProps & IconButtonProps> = ({
  links,
  gap = sizing.gap.small,
  ...rest
}) => {
  return (
    <HStack gap={gap}>
      {links.map((link, index) => (
        <IconLink key={index} href={link.url} navigateWithHref={link.navigateWithHref} {...rest}>
          {link.icon}
        </IconLink>
      ))}
    </HStack>
  )
}
