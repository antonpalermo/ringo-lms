import useDocumentTitle from '@/hooks/use-document-title'
import { useLoaderData } from 'react-router-dom'
import { Course } from '@/lib/types'

export default function CoursesPage() {
  useDocumentTitle('Courses')

  const courses = useLoaderData() as Course[]

  return (
    <div>
      <h1>Courses</h1>
      {courses.map(course => (
        <div>
          <h2>{course.name}</h2>
          <p>{course.description}</p>
        </div>
      ))}
    </div>
  )
}
