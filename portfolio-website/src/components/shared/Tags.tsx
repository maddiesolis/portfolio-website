import { Tag, Wrap } from '@chakra-ui/react'
import { FC } from 'react'
import { Label } from '../typography'
import { TagsProps } from '../props'

export const Tags: FC<TagsProps> = ({ items, justify }) => {
  return (
    <Wrap justifyContent={justify}>
      {items.map((item, index) => (
        <Tag.Root
          key={index}
          rounded={'full'}
          variant={'outline'}
          border={'1px solid'}
          borderColor={'border.dark'}
        >
          <Label>{item}</Label>
        </Tag.Root>
      ))}
    </Wrap>
  )
}
