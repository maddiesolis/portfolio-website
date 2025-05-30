import { DM_Sans } from 'next/font/google'
import { Quicksand } from 'next/font/google'
import { Provider } from '@/components/provider'
import { RootContainer } from '@/components/containers'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})
const quicksand = Quicksand({
  variable: '--font-quicksand',
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
      <body className={`${dmSans.variable} ${quicksand.variable}`} style={{ overflow: 'hidden' }}>
        <Provider>
          <RootContainer>{children}</RootContainer>
        </Provider>
      </body>
    </html>
  )
}
