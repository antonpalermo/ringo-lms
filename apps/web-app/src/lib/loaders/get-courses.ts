import { http } from '../axios'

export default async function getCourses() {
  try {
    const request = await http.get('/courses')
    return request.data
  } catch (error) {
    console.log(error)
  }
}
