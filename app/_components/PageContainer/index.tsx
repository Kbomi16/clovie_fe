import { ReactNode } from 'react'

type PageContainerProps = {
  children: ReactNode
  className?: string
}

export default function PageContainer({
  children,
  className,
}: PageContainerProps) {
  return (
    <div className={`mx-auto w-full max-w-6xl p-4 ${className}`}>
      {children}
    </div>
  )
}
