import { useState, Dispatch, SetStateAction } from 'react'
import AddCharsForm from './AddCharsForm'
import SettingsForm from './SettingsForm'

interface Props {
  getGeneratedText: Dispatch<SetStateAction<string | null>>
}

const GenForm = ({ getGeneratedText }: Props) => {
  const [chars, setChars] = useState<string[]>([])

  return (
    <div className='flex flex-col items-center gap-16 bg-slate-600 p-16 rounded-lg border-2 border-amber-400'>
      <AddCharsForm SChars={[chars, setChars]} />
      <div className='w-full h-0.5 bg-slate-400 rounded-full' />
      <SettingsForm chars={chars} getGeneratedText={getGeneratedText} />
    </div>
  )
}

export default GenForm
