import { Button } from '@packages/shared-ui/components/button'
import Link from 'next/link'

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link passHref href={'/create/course'}>
        <Button>Create</Button>
      </Link>
    </div>
  )
}
