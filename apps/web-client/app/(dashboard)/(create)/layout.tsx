import React from 'react'
import Navbar from '@/app/(dashboard)/(create)/_components/navbar'

interface CreateRootLayoutProps {
  children: React.ReactNode
}

export default function CreateRootLayout({ children }: CreateRootLayoutProps) {
  return (
    <>
      <Navbar />
      <main className='w-full my-5'>{children}</main>
    </>
  )
}
