import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Trash2, InfoIcon, FileIcon, AlbumIcon, ImageIcon } from 'lucide-react'

import useDocumentTitle from '@/hooks/use-document-title'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'
import Chapter from '@/components/chapter'

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

function CourseDetailsForm() {
  const courseDetailSchema = z.object({
    name: z.string(),
    description: z.string()
  })

  const form = useForm<z.infer<typeof courseDetailSchema>>({
    resolver: zodResolver(courseDetailSchema),
    defaultValues: {
      name: 'Untitled',
      description: ''
    }
  })

  async function onHandleSubmit(values: z.infer<typeof courseDetailSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form className='space-y-3' onSubmit={form.handleSubmit(onHandleSubmit)}>
        <FormField
          name='name'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          name='description'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}

export default function EditCoursePage() {
  useDocumentTitle(`Edit - Untitled`)

  const chapters = [
    {
      name: 'Introduction',
      duration: '3:00',
      isFree: true
    },
    {
      name: 'Javascript Data Types',
      duration: '4:24',
      isFree: false
    },
    {
      name: 'Functions',
      duration: '2:54',
      isFree: false
    }
  ]

  return (
    <div className='max-w-5xl mx-auto py-20 space-y-10'>
      <div className='w-full grid grid-cols-2'>
        <Heading />
        <div className='flex items-center space-x-3 place-content-end'>
          <Button variant='outline'>Publish</Button>
          <Button size='icon'>
            <Trash2 className='w-4 h-4' />
          </Button>
        </div>
      </div>
      <div className='grid grid-cols-2 gap-5'>
        <Card>
          <CardHeader>
            <CardTitle className='flex items-center'>
              <InfoIcon className='w-5 h-5 mr-2' />
              Course Details
            </CardTitle>
            <CardDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CourseDetailsForm />
          </CardContent>
          <CardFooter>
            <Button>Save</Button>
          </CardFooter>
        </Card>
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
      </div>
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
    </div>
  )
}
