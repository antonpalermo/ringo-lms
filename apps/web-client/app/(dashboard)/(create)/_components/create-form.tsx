'use client'

import { Button } from '@packages/shared-ui/components/button'
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormLabel
} from '@packages/shared-ui/components/form'
import { Input } from '@packages/shared-ui/components/input'

import { useForm } from 'react-hook-form'

type FormTypes = {
  name: string
}

export default function CreateForm() {
  const form = useForm<FormTypes>({
    defaultValues: {
      name: ''
    }
  })

  async function submit(data: FormTypes) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(submit)}>
        <FormField
          name='name'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course name</FormLabel>
              <FormControl>
                <Input placeholder='Javascript for beginers' {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type='submit'>Create</Button>
      </form>
    </Form>
  )
}
