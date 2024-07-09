import { ImageIcon, FileIcon } from 'lucide-react'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function CourseUploadCover() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center'>
          <ImageIcon className='w-5 h-5 mr-2' />
          Cover Image
        </CardTitle>
        <CardDescription>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className='col-span-full'>
          <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
            <div className='text-center'>
              <FileIcon
                aria-hidden='true'
                className='mx-auto h-12 w-12 text-gray-300'
              />
              <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                <p className='pl-1'>Upload a file or drag and drop</p>
              </div>
              <p className='text-xs leading-5 text-gray-600'>
                PNG, JPG, GIF up to 10MB
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button>Upload</Button>
      </CardFooter>
    </Card>
  )
}
