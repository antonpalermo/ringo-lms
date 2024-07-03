import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel
} from '@/components/ui/form'

import useDocumentTitle from '@/hooks/use-document-title'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
  name: z.string(),
  description: z.string()
})

export default function CreateCoursePage() {
  useDocumentTitle('Create new course')

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: ''
    }
  })

  async function onHandleSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  function CreateForm() {
    return (
      <Form {...form}>
        <form className='w-full' onSubmit={form.handleSubmit(onHandleSubmit)}>
          <div className='space-y-3'>
            <FormField
              control={form.control}
              name='name'
              render={() => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder='Javascript 101' />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={() => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea placeholder='Course description' />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type='submit'>Create</Button>
          </div>
        </form>
      </Form>
    )
  }

  return (
    <div className='relative h-screen'>
      <div className='absolute '>
        <div className='max-w-xl mx-auto space-y-6'>
          <div>
            <h1 className='text-xl font-medium'>Create new course</h1>
            <p className='text-gray-500'>
              Provide a course name that catch attention
            </p>
          </div>
          <CreateForm />
        </div>
      </div>
    </div>
  )
}
