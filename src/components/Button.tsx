import React from 'react'

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost'
}

export default function Button({ variant='ghost', className='', children, ...rest }: Props) {
  const base = 'px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
  const styles = variant === 'primary'
    ? 'bg-sky-600 text-white hover:bg-sky-700 focus:ring-sky-500'
    : 'bg-white border hover:bg-slate-50'
  return (
    <button className={`${base} ${styles} ${className}`} {...rest}>
      {children}
    </button>
  )
}
