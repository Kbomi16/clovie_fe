import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/app/_styles/globals.css'
import '@/app/_styles/customToast.css'
import Providers from './providers'
import Toast from './_components/Toast'
import Header from './_components/Header'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Clovie',
  description: '글 작성과 활동을 통해 ‘네잎클로버 등급’을 올리는 블로그 서비스',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <main>{children}</main>
        </Providers>
        <Toast />
      </body>
    </html>
  )
}
