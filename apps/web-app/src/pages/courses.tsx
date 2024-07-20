import useDocumentTitle from '@/hooks/use-document-title'
import { useLoaderData } from 'react-router-dom'
import { Course } from '@/lib/types'
import { Card, CardContent } from '@/components/ui/card'

export default function CoursesPage() {
  useDocumentTitle('Courses')

  const courses = useLoaderData() as Course[]

  return (
    <main className='flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6'>
      <div className='flex items-center'>
        <h1 className='text-lg font-semibold md:text-2xl'>Courses</h1>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-1 gap-5'>
        {courses.map(course => (
          <Card>
            <CardContent>
              <h2 className='mt-6 text-lg font-medium'>{course.name}</h2>
              <p className='text-muted-foreground text-sm'>
                {course.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
