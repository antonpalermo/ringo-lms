import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Trash2, InfoIcon, FileIcon, AlbumIcon } from 'lucide-react'

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
          <div className='grid grid-cols-2 gap-3'>
            <CourseDetailsForm />
            <div className='border-2 rounded border-dashed flex'>
              <div className='m-auto flex flex-col items-center'>
                <FileIcon className='w-5 h-5' />
                <span className='text-sm text-gray-500'>
                  Upload cover image
                </span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button>Save</Button>
        </CardFooter>
      </Card>
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
        <CardContent></CardContent>
      </Card>
    </div>
  )
}
