import { ClipboardIcon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  text: string
  genNewText: Dispatch<SetStateAction<string | null>>
}

const DisplayText = ({ text, genNewText }: Props) => {
  return (
    <div className='flex bg-slate-600'>
      <button className='bg-amber-400 rounded-lg p-2'>
        <ClipboardIcon className='w-8 h-8 text-slate-800' />
      </button>
      <button onClick={() => genNewText(null)}>New</button>
    </div>
  )
}

export default DisplayText
