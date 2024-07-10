import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { InfoIcon } from 'lucide-react'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl
} from '@/components/ui/form'
import {
  Card,
  CardTitle,
  CardFooter,
  CardHeader,
  CardContent,
  CardDescription
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'

export type CourseDetailsFormProps = {
  placeholder: { name: string; description: string }
}

export default function CourseDetailsForm({
  placeholder
}: CourseDetailsFormProps) {
  const courseDetailSchema = z.object({
    name: z.string(),
    description: z.string()
  })

  const form = useForm<z.infer<typeof courseDetailSchema>>({
    resolver: zodResolver(courseDetailSchema),
    defaultValues: {
      name: placeholder.name,
      description: placeholder.description
    }
  })

  async function onHandleSubmit(values: z.infer<typeof courseDetailSchema>) {
    console.log(values)
  }

  return (
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
        <Form {...form}>
          <form
            className='space-y-3'
            onSubmit={form.handleSubmit(onHandleSubmit)}
          >
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
      </CardContent>
      <CardFooter>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  )
}
