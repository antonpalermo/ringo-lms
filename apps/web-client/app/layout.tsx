import type { Metadata } from 'next'

import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'

import options from '@/app/api/auth/options'
import SessionProvider from '@/components/providers/session'

import '@packages/shared-ui/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ringo',
  description: 'Learning Management System'
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  const session = await getServerSession(options)

  return (
    <html lang='en'>
      <body className={inter.className}>
        <SessionProvider session={session}>{children}</SessionProvider>
      </body>
    </html>
  )
}
