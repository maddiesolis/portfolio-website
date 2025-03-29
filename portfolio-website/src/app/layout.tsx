import { DM_Sans } from 'next/font/google'
import { Provider } from '@/components/provider'
import { RootContainer } from '@/components/containers'

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
      <body className={`${dmSans.variable}`}>
        <Provider>
          <RootContainer>{children}</RootContainer>
        </Provider>
      </body>
    </html>
  )
}
