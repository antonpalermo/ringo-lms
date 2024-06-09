import Image from 'next/image'
import { getServerSession } from 'next-auth'

import options from '@/app/api/auth/options'

export default async function Navbar() {
  const session = await getServerSession(options)

  if (!session) {
    return null
  }

  return (
    <nav className='w-full px-5'>
      <div className='max-w-7xl mx-auto py-5 flex items-center justify-end'>
        {session && (
          <img
            className='rounded-full w-10 h-10'
            src={session.user?.image!}
            alt='user avatar'
          />
        )}
      </div>
    </nav>
  )
}
