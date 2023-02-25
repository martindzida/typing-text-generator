import { ReactNode } from 'react'

interface Props {
  handler: () => void
  children: ReactNode[]
}

const DisplayTextBtn = ({ handler, children }: Props) => {
  return (
    <button
      className='bg-amber-400 text-slate-800 font-medium text-lg rounded-lg px-10 py-3'
      onClick={handler}
    >
      <span className='flex justify-center items-center gap-2'>{children}</span>
    </button>
  )
}

export default DisplayTextBtn
