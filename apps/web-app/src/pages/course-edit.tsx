import { Trash2 } from 'lucide-react'
import { useLoaderData } from 'react-router-dom'

import { Course } from '@/lib/types'
import { Button } from '@/components/ui/button'

import CourseChapters from '@/components/course/chapters'
import CourseDetailsForm from '@/components/course/details-form'
import CourseUploadCover from '@/components/course/upload-cover'

import useDocumentTitle from '@/hooks/use-document-title'

function Heading() {
  return (
    <div className='m-auto text-left'>
      <h1 className='text-2xl font-bold sm:text-3xl'>Edit Untitled Course</h1>
      <p className='mt-2 text-gray-500'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
        eaque error neque ipsa culpa autem, at itaque nostrum!
      </p>
    </div>
  )
}

export default function EditCoursePage() {
  const course = useLoaderData() as Course

  useDocumentTitle(`Edit - Untitled`)

  return (
    <div className='max-w-5xl mx-auto py-20 space-y-10'>
      <div className='w-full grid grid-cols-2'>
        <Heading />
        <div className='flex items-center space-x-3 place-content-end'>
          <Button variant='outline'>
            {course.isDraft ? 'Publish' : 'Unpublished'}
          </Button>
          <Button size='icon'>
            <Trash2 className='w-4 h-4' />
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-5'>
        <CourseDetailsForm
          placeholder={{ name: course.name, description: course.description }}
        />
        <CourseUploadCover />
      </div>
      <CourseChapters chapters={course.chapters} />
    </div>
  )
}
