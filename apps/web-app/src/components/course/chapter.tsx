import { Badge } from '@/components/ui/badge'
import { GripVerticalIcon } from 'lucide-react'

export default function Chapter({
  details: { name, isFree, duration }
}: {
  details: {
    duration: string
    isFree: boolean
    name: string
  }
}) {
  return (
    <div className='bg-slate-100 rounded px-5 py-3'>
      <div className='w-full inline-flex justify-between items-center'>
        <div className='inline-flex items-center justify-center'>
          <GripVerticalIcon className='w-5 h-5 mr-3' />
          <span className='text-sm font-medium'>{name}</span>
        </div>
        <div>
          {isFree && <Badge>Free</Badge>}{' '}
          <Badge variant='secondary'>{duration}</Badge>
        </div>
      </div>
    </div>
  )
}
