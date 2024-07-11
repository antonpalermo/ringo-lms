import { GripVerticalIcon } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Chapter as ChapterType } from '@/lib/types'

export default function Chapter({
  details: { name, isDraft, duration }
}: {
  details: ChapterType
}) {

  console.log(name)

  return (
    <div className='bg-slate-100 rounded px-5 py-3'>
      <div className='w-full inline-flex justify-between items-center'>
        <div className='inline-flex items-center justify-center'>
          <GripVerticalIcon className='w-5 h-5 mr-3' />
          <span className='text-sm font-medium'>{name}</span>
        </div>
        <div className='space-x-2'>
          {isDraft && <Badge>Draft</Badge>}
          <span className='text-sm font-medium max-w-10'>{duration}</span>
        </div>
      </div>
    </div>
  )
}
