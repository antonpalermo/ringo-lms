import { Button } from '@/components/ui/button'
import { useNavigate } from 'react-router-dom'

export default function PageNotFound() {
  const navigate = useNavigate()

  function handleOnClick() {
    navigate('/', { replace: true })
  }

  return (
    <div className='flex h-screen'>
      <div className='m-auto'>
        <div className='text-center'>
          <div className='mb-10'>
            <h1 className='text-9xl font-black text-gray-200'>404</h1>
            <p className='text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Uh-oh!
            </p>
            <p className='mt-4 text-gray-500'>We can't find that page.</p>
          </div>
          <Button variant='link' onClick={handleOnClick}>
            Go back home
          </Button>
        </div>
      </div>
    </div>
  )
}
