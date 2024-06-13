import dynamic from 'next/dynamic'
import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports'

interface IconProps extends LucideProps {
  name: keyof typeof dynamicIconImports
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name])

  return <LucideIcon {...props} className='h-5 w-5' />
}

export default Icon
