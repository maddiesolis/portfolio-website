'use client'

import { Children, FC, useEffect, useState } from 'react'
import { ContentPageContainerProps, ContentPageSectionContainerProps } from '../props'
import { Separator, Stack } from '@chakra-ui/react'
import { PageHeader, PageSubHeader } from '../typography'
import { TableOfContents } from '../navigation/TableOfContents'
import '@/css/animations.css'

export const ContentPageContainer: FC<ContentPageContainerProps> = ({
  title,
  tableOfContentsLinks,
  children,
}) => {
  const [showContents, setShowContents] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContents(true)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Stack gap={{ base: 10, md: 14, lg: 16 }}>
      <Stack
        className="slideInRightSlow"
        gap={{ base: 1, md: 1.5, lg: 2 }}
        pt={{ base: 4, md: 8, lg: 12 }}
      >
        <PageHeader>{title}</PageHeader>
        {tableOfContentsLinks && <TableOfContents links={tableOfContentsLinks} />}
      </Stack>
      {showContents && (
        <Stack gap={{ base: 8, md: 10, lg: 12 }} pb={24}>
          {/* Todo: Is this the best way to sequentially render children? */}
          {Children.toArray(children).map((child, index) => (
            // Todo: Is it best practice to wrap anything that needs to be animated in a Box?
            <Stack
              key={index}
              className="slideInRightFast"
              animationDelay={`${index * 0.3}s`}
              animationFillMode={'both'}
              gap={{ base: 8, md: 10, lg: 12 }}
            >
              {child}
              {index !== Children.count(children) - 1 ? <Separator /> : null}
            </Stack>
          ))}
        </Stack>
      )}
    </Stack>
  )
}

export const ContentPageSectionContainer: FC<ContentPageSectionContainerProps> = ({
  title,
  children,
}) => {
  return (
    <Stack gap={{ base: 3, md: 4, lg: 6 }} scrollMarginTop={{ base: 48, md: 56, lg: 60 }}>
      <Stack>{title && <PageSubHeader>{title}</PageSubHeader>}</Stack>
      {children}
    </Stack>
  )
}
