import { ClipboardIcon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction } from 'react'

interface Props {
  text: string
  genNewText: Dispatch<SetStateAction<string | null>>
}

const DisplayText = ({ text, genNewText }: Props) => {
  return (
    <div className='w-1/2 relative flex flex-col items-center gap-16 bg-slate-600 p-16 rounded-lg border-2 border-amber-400'>
      <button
        className='absolute top-4 right-4 bg-amber-400 rounded-lg p-2'
        onClick={() => navigator.clipboard.writeText(text)}
      >
        <ClipboardIcon className='w-8 h-8 text-slate-800' />
      </button>
      <h2 className='text-amber-400 text-4xl'>Here is your text!</h2>
      <p className='text-slate-400 text-2xl p-8 selection:bg-amber-400 selection:text-slate-600'>
        {text}
      </p>
      <button
        onClick={() => genNewText(null)}
        className='bg-amber-400 text-slate-900 font-medium text-lg rounded p-3 mt-4 hover:cursor-pointer'
      >
        Generate new
      </button>
    </div>
  )
}

export default DisplayText
