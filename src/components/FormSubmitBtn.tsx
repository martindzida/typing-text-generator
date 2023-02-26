import { ReactNode } from 'react'

interface Props {
  children: ReactNode[]
}

const FormSubmitBtn = ({ children }: Props) => {
  return (
    <button
      type='submit'
      className='flex justify-center gap-4 items-center bg-amber-400 text-slate-900 font-medium text-lg rounded p-3 mt-4'
    >
      {children}
    </button>
  )
}

export default FormSubmitBtn
