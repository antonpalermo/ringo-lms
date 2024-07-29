import useDocumentTitle from '@/hooks/use-document-title'
import { Course } from '@/lib/types'
import { useLoaderData } from 'react-router-dom'

export default function CoursePage() {
  useDocumentTitle('Untitled')

  const course = useLoaderData() as Course

  return (
    <div>
      <h1>Course</h1>
      {JSON.stringify(course, null, 4)}
    </div>
  )
}
