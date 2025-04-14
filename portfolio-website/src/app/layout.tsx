import { DM_Sans } from 'next/font/google'
import { Provider } from '@/components/provider'
import { RootContainer } from '@/components/containers'
import { AnimatedBackground } from '@/components/animations/MeshGradientBackground'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

export const metadata = {
  title: 'Madeline Solis de Ovando',
  description: 'Portfolio website',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
}

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
          <AnimatedBackground />
        </Provider>
      </body>
    </html>
  )
}
