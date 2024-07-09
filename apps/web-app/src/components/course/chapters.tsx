import { AlbumIcon } from 'lucide-react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent
} from '@/components/ui/card'
import Chapter from '@/components/course/chapter'

export type ChaptersProps = {
  chapters: { name: string; duration: string; isFree: boolean }[]
}

export default function CourseChapters({ chapters }: ChaptersProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center'>
          <AlbumIcon className='w-5 h-5 mr-2' />
          Chapters
        </CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-3'>
          {chapters.map(chapter => (
            <Chapter details={chapter} />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
