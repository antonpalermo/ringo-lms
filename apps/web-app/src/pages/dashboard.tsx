import { Button } from '@/components/ui/button'
import useDocumentTitle from '@/hooks/use-document-title'

export default function DashboardPage() {
  useDocumentTitle('Dashboard')

  return (
    <div>
      <h1>Dashboard</h1>
      <Button>sample</Button>
    </div>
  )
}
