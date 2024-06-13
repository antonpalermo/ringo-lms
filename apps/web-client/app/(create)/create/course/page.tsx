'use client'

import { Button } from '@packages/shared-ui/components/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@packages/shared-ui/components/form'
import { Input } from '@packages/shared-ui/components/input'
import { Textarea } from '@packages/shared-ui/components/textarea'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  description: string
}

function PageHeading() {
  const meta = {
    heading: 'Create new course',
    description:
      "What would you like to call this couse? Don't worry you can change this later."
  }

  return (
    <div className='space-y-2'>
      <h1 className='text-2xl font-medium'>{meta.heading}</h1>
      <p className='text-gray-500'>{meta.description}</p>
    </div>
  )
}

export default function CourseCreatePage() {
  // initial form data.
  const initialData: FormData = {
    name: '',
    description: ''
  }

  const form = useForm<FormData>({
    defaultValues: initialData
  })

  async function onSubmit(data: FormData) {
    const request = await fetch('/api/courses/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })

    console.log(await request.json())
  }

  return (
    <div className='max-w-2xl mx-auto px-5'>
      <PageHeading />
      <div className='my-5'>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-5'>
            <FormField
              name='name'
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder='Javascript Fundamentals'
                      autoComplete='off'
                      {...field}
                    />
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
                    <Textarea placeholder='Course description' {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className='w-full flex items-center justify-end space-x-5'>
              <Button variant='ghost'>Cancel</Button>
              <Button>Create</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
