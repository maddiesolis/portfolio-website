import { FC } from 'react'
import { IconButton, IconButtonProps } from '@chakra-ui/react'

export const CustomIconButton: FC<IconButtonProps> = ({ ...rest }) => {
  return (
    <IconButton bg="none" w="fit-content" h="fit-content" {...rest}>
      {rest.children}
    </IconButton>
  )
}
