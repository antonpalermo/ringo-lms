import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'

import useDocumentTitle from '@/hooks/use-document-title'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { http } from '@/lib/axios'
import { useToast } from '@/hooks/use-toast'
import { useNavigate } from 'react-router-dom'

const formSchema = z.object({
  name: z.string(),
  description: z.string()
})

export default function CreateCoursePage() {
  useDocumentTitle('Create new course')

  const { toast } = useToast()
  const navigate = useNavigate()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: ''
    }
  })

  async function onHandleSubmit(values: z.infer<typeof formSchema>) {
    try {
      const { data } = await http.post('/courses/create', values)

      navigate(`/course/${data.id}/edit`)

      toast({
        description: `successfully created ${data.name}`
      })
    } catch (error) {
      toast({
        title: 'Uh oh! Something went wrong.',
        description: 'There was a problem with your request.'
      })
    }
  }

  return (
    <div className='flex h-screen'>
      <div className='max-w-xl m-auto space-y-6'>
        <div className='mx-auto text-left'>
          <h1 className='text-2xl font-bold sm:text-3xl'>Create new course</h1>
          <p className='mt-2 text-gray-500'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero
            nulla eaque error neque ipsa culpa autem, at itaque nostrum!
          </p>
        </div>
        <Form {...form}>
          <form
            className='mx-auto mb-0 mt-8 space-y-4'
            onSubmit={form.handleSubmit(onHandleSubmit)}
          >
            <div className='space-y-3'>
              <FormField
                name='name'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        autoComplete='off'
                        placeholder='Introduction to web development'
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </FormDescription>
                    <FormMessage />
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
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className='w-full flex items-center justify-end space-x-3'>
              <Button variant='ghost'>Cancel</Button>
              <Button type='submit'>Create</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
