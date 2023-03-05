import { ClipboardIcon, PlusIcon } from '@heroicons/react/24/outline'
import { Dispatch, SetStateAction } from 'react'
import DisplayTextBtn from './DisplayTextBtn'

interface Props {
  text: string
  genNewText: Dispatch<SetStateAction<string | null>>
}

//TODO: dont reset the text, rather have another state, so you can be able to get back the previously generated text, until the user generates a new one
const DisplayText = ({ text, genNewText }: Props) => {
  return (
    <div className='w-1/2 relative flex flex-col items-center gap-16 bg-slate-600 p-16 rounded-lg border-2 border-amber-400'>
      <h3 className='text-amber-400 text-4xl'>Have fun typing!</h3>
      <p className='text-slate-300 text-2xl p-8 selection:bg-amber-400 selection:text-slate-600'>
        {text}
      </p>
      <div className='flex gap-4'>
        <DisplayTextBtn
          handler={() => navigator.clipboard.writeText(text)}
          variant='normal'
        >
          <span>Copy</span>
          <ClipboardIcon className='w-8 h-8 text-slate-800' />
        </DisplayTextBtn>
        <DisplayTextBtn handler={() => genNewText(null)} variant='dark'>
          <span>New</span>
          <PlusIcon className='w-8 h-8 text-amber-300' />
        </DisplayTextBtn>
      </div>
    </div>
  )
}

export default DisplayText
