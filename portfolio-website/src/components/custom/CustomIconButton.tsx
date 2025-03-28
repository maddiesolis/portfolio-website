import { FC } from 'react'
import { IconButton, IconButtonProps } from '@chakra-ui/react'

// Todo: Get rid of this, use Awards as a template
export const CustomIconButton: FC<IconButtonProps> = ({ ...rest }) => {
  return (
    <IconButton bg="none" {...rest}>
      {rest.children}
    </IconButton>
  )
}
