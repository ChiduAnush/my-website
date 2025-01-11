import './globals.css'
import type { Metadata } from 'next'
import { GeistMono } from 'geist/font/mono'

export const metadata: Metadata = {
  title: 'chiduanush',
  description: 'Personal website of chidambaram arunachalam',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/CA-2.png" />
      </head>
      <body className={GeistMono.className}>{children}</body>
    </html>
  )
}

