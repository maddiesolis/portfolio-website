import { FC } from 'react'
import { Paragraph } from '../typography'
import { ContentPageSectionContainer } from '../shared/ContentPageContainers'
import { Box } from '@chakra-ui/react'
import { IntroductionProps } from '../props'
import { sizing } from '../../globalVariables'
import HelloSvg from '../svgs/HelloSvg'

const NewLine = () => {
  return <Box h={sizing.gap.xsmall} />
}

export const Introduction: FC<IntroductionProps> = ({ paragraphs }) => {
  return (
    <ContentPageSectionContainer title="Introduction">
      <Box position={'relative'}>
        <Box
          float={{ base: 'none', sm: 'right' }}
          ml={sizing.margin.leftIntroImg}
          mb={sizing.margin.bottomIntroImg}
          w={sizing.width.introImg}
          maxW={'100%'}
        >
          <HelloSvg />
        </Box>
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
