import Icon from '@/components/icon'
import SidenavLink from './sidenav-link'

import dynamicIconImports from 'lucide-react/dynamicIconImports'

interface SidenavItem {
  href: string
  label: string
  icon: keyof typeof dynamicIconImports
}

export default function Sidenav() {
  const items: SidenavItem[] = [
    { label: 'Dashboard', icon: 'home', href: '/' },
    { label: 'Courses', icon: 'book-copy', href: '/courses' }
  ]

  return items.map(item => (
    <SidenavLink href={item.href}>
      <Icon name={item.icon} />
      {item.label}
    </SidenavLink>
  ))
}
