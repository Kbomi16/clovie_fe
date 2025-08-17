import { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  className?: string
  onClick?: () => void
  type?: 'primary' | 'default' | 'dashed' | 'text'
  disabled?: boolean
}

export default function Button({
  children,
  className,
  onClick,
  type = 'default',
  disabled = false,
}: ButtonProps) {
  const typeStyles: Record<typeof type, string> = {
    primary:
      'btn-grad-green text-white border border-transparent [--angle:135deg] [--end:#81c784] [--start:#2e7d32] hover:[--angle:160deg] hover:[--end:#2e7d32] hover:[--start:#81c784]',
    default:
      'border text-gray-500 border-gray-300  transition-all hover:bg-gray-200',
    dashed:
      'border border-dashed border-gray-400 text-gray-800 hover:text-primary hover:border-primary transition-all',
    text: 'bg-transparent',
  }

  return (
    <button
      className={`${typeStyles[type]} ${className} w-full cursor-pointer rounded-md px-6 py-2 text-center transition-all duration-200 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
