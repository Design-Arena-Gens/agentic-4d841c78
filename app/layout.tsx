import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI轉型推動計畫簡報',
  description: 'AI創新應用與組織轉型推動方案',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-TW">
      <body>{children}</body>
    </html>
  )
}
