import { ReactNode } from 'react'

type BtnVariant = 'normal' | 'dark'
interface Props {
  handler: () => void
  children: ReactNode[]
  variant: BtnVariant
}

const DisplayTextBtn = ({ handler, children, variant }: Props) => {
  return (
    <button
      className={`${
        variant === 'normal'
          ? 'bg-amber-400 text-slate-800'
          : 'bg-slate-700 text-amber-400'
      } font-medium text-lg rounded-lg px-10 py-3`}
      onClick={handler}
    >
      <span className='flex justify-center items-center gap-2'>{children}</span>
    </button>
  )
}

export default DisplayTextBtn
