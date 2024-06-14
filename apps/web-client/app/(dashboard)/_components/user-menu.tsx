'use client'

import React from 'react'
import { useSession } from 'next-auth/react'

import { Button } from '@packages/shared-ui/components/button'
import {
  DropdownMenu,
  DropdownMenuTrigger
} from '@packages/shared-ui/components/dropdown-menu'

import Icon from '@/components/icon'

export default function UserMenu() {
  const [open, setOpen] = React.useState(false)
  const { data: session } = useSession()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' className='w-full justify-between'>
          <div className='w-full inline-flex items-center space-x-3'>
            <img
              src={session?.user?.image!}
              alt='user avatar'
              className='w-5 h-5 rounded-full'
            />
            <span>{session?.user?.name}</span>
          </div>
          <Icon
            name='chevrons-up-down'
            className='w-4 h-5 shrink-0 opacity-50'
          />
        </Button>
      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}
