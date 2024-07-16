import { http } from '@/lib/axios'
import { LoaderFunctionArgs } from 'react-router-dom'

export default async function courseLoader({ params }: LoaderFunctionArgs) {
  try {
    const request = await http.get(`/courses/${params.courseId}`)
    return request.data
  } catch (error) {
    console.log(error)
  }
}
