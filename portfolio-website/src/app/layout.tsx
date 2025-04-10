import { DM_Sans } from 'next/font/google'
import { Provider } from '@/components/provider'
import { RootContainer } from '@/components/containers'
import { AnimatedBackground } from '@/components/animations/MeshGradientBackground'
import { AnimatedGrainOverlay } from '@/components/animations/GrainOverlay'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable}`} style={{ overflow: 'hidden' }}>
        <Provider>
          <RootContainer>{children}</RootContainer>
          <AnimatedGrainOverlay />
          <AnimatedBackground />
        </Provider>
      </body>
    </html>
  )
}
