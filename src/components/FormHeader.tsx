import { ReactNode } from 'react'

interface Props {
  title: string
  children: ReactNode
}

const FormHeader = ({ title, children }: Props) => {
  return (
    <div className='flex justify-center items-center gap-4 pb-8'>
      <h3 className='text-amber-400 text-4xl'>{title}</h3>
      {children}
    </div>
  )
}

export default FormHeader
