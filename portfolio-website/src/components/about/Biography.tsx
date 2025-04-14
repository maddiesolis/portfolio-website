import { FC } from 'react'
import { ParentProps } from '../props'
import { Paragraph } from '../typography'
import { Image } from '@chakra-ui/react'
import { ContentPageSectionContainer } from '../shared/ContentPageContainers'

export const Biography: FC<ParentProps> = ({ children }) => {
  return (
    <ContentPageSectionContainer id="biography" title="Biography">
      <Paragraph>{children}</Paragraph>
      {/* <Image
        alt="biography image"
        src="https://images.stockcake.com/public/4/0/0/400516f4-7c2f-4fbb-9e18-af875b3a246d_large/snowy-mountain-sunset-stockcake.jpg"
        aspectRatio={21 / 9}
        w="95%"
        borderRadius={'sm'}
      /> */}
    </ContentPageSectionContainer>
  )
}
