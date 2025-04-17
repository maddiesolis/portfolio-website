import { FC } from 'react'
import { Paragraph } from '../typography'
import { ContentPageSectionContainer } from '../shared/ContentPageContainers'
import { Box, Image, VStack } from '@chakra-ui/react'
import { IntroductionProps } from '../props'
import { sizing } from '../shared/sizing'

const NewLine = () => {
  return <Box h={sizing.gap.xsmall} />
}

export const Introduction: FC<IntroductionProps> = ({ paragraphs }) => {
  return (
    <ContentPageSectionContainer title="Introduction">
      <Box position={'relative'}>
        <Image
          src="/svg/hello.svg"
          alt="biography svg"
          float={{ base: 'none', sm: 'right' }}
          ml={sizing.margin.leftIntroImg}
          mb={sizing.margin.bottomIntroImg}
          w={sizing.width.introImg}
          h="fit-content"
          objectFit={'contain'}
        />
        {paragraphs.map((paragraph, index) => (
          <Box key={index}>
            <Paragraph>{paragraph}</Paragraph>
            {index < paragraphs.length - 1 && <NewLine />}
          </Box>
        ))}
      </Box>
    </ContentPageSectionContainer>
  )
}
