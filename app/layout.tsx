import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TheLastSemicolon',
  description: 'Last',
  generator: 'Vercel',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
