import Link, { LinkProps } from 'next/link'
import React from 'react'

interface SidenavLinkProps extends LinkProps {
  children: React.ReactNode
}
export default function SidenavLink({ children, ...props }: SidenavLinkProps) {
  return (
    <Link
      {...props}
      className='flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary'
    >
      {children}
    </Link>
  )
}
