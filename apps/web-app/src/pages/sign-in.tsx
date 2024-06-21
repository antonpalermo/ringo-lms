import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import useDocumentTitle from '@/hooks/use-document-title'

export default function SignInPage() {
  useDocumentTitle('Sign In')

  return (
    <div className='mx-auto grid max-w-xl gap-6'>
      <div className='grid gap-2 text-left'>
        <h1 className='text-3xl font-bold'>Sign In</h1>
        <p className='text-balance text-muted-foreground'>
          Enter your email below to sign in to your account
        </p>
      </div>
      <div className='grid gap-4'>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            placeholder='JaneDoe@example.com'
            required
          />
        </div>
        <div className='grid gap-2'>
          <div className='flex items-center'>
            <Label htmlFor='password'>Password</Label>
            <a
              href='/forgot-password'
              className='ml-auto inline-block text-sm underline'
            >
              Forgot your password?
            </a>
          </div>
          <Input
            id='password'
            type='password'
            placeholder='Password'
            required
          />
        </div>
        <Button type='submit' className='w-full'>
          Login
        </Button>
        <Button variant='outline' className='w-full'>
          Login with Google
        </Button>
      </div>
      <div className='mt-4 text-center text-sm'>
        Don&apos;t have an account?{' '}
        <a href='#' className='underline'>
          Sign up
        </a>
      </div>
    </div>
  )
}
