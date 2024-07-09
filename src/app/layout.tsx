import { Inter as FontSans } from 'next/font/google'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'
import { type PropsWithChildren } from 'react'
import { type Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import { Toaster } from '@/components/ui/toaster'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: '工具箱',
  description: '工具箱',
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="container mx-auto px-4 py-2">{children}</main>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
