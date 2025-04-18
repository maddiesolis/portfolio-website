import { Children, FC } from 'react'
import { ContentPageContainerProps, ContentPageSectionContainerProps } from '../props'
import { Box, Separator, Stack } from '@chakra-ui/react'
import { PageHeader, PageSubHeader } from '../typography'
import '@/css/animations.css'
import { sizing } from '../../globalVariables'

export const ContentPageContainer: FC<ContentPageContainerProps> = ({ title, children }) => {
  return (
    <Stack gap={sizing.gap.xlarge}>
      <Box className="slideInRightSlow" pt={sizing.padding.large}>
        <PageHeader>{title}</PageHeader>
      </Box>

      <Stack gap={sizing.gap.large} pb={sizing.padding.contentPageBottom}>
        {Children.toArray(children).map((child, index) => (
          <Stack
            key={index}
            className="slideInRightFast"
            animationDelay={`${0.5 + index * 0.3}s`}
            animationFillMode={'both'}
            gap={sizing.gap.large}
          >
            {child}
            {index !== Children.count(children) - 1 ? (
              <Separator borderColor={'separator.default'} />
            ) : null}
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export const ContentPageSectionContainer: FC<ContentPageSectionContainerProps> = ({
  title,
  children,
}) => {
  return (
    <Stack gap={sizing.gap.medium}>
      {title && <PageSubHeader>{title}</PageSubHeader>}
      {children}
    </Stack>
  )
}
