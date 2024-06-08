'use client'

import { Button } from '@packages/shared-ui/components/button'

export default function Dashboard() {
  const createCourse = async () => {
    const request = await fetch('/api/courses/create', {
      method: 'POST'
    })

    console.log(await request.json())
  }

  return (
    <div>
      <h1>Dashboard</h1>
      <Button onClick={createCourse}>Create</Button>
    </div>
  )
}
