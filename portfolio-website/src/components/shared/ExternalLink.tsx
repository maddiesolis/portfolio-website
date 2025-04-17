'use client'

import React, { FC } from 'react'
import { ExternalLinkProps } from '../props'
import Link from 'next/link'

export const ExternalLink: FC<ExternalLinkProps> = ({ href, children, navigateWithHref }) => {
  const target = navigateWithHref ? '_self' : '_blank'

  return (
    <Link href={href} target={target} rel={navigateWithHref ? undefined : 'noopener noreferrer'}>
      {children}
    </Link>
  )
}
