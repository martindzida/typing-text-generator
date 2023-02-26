import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LanguageIcon, PlusIcon } from '@heroicons/react/24/outline'
import SwitchModeSpan from './SwitchModeSpan'
import FormHeader from './FormHeader'
import CurrentChars from './CurrentChars'
import FormSubmitBtn from './FormSubmitBtn'

interface Props {
  SChars: [string[], React.Dispatch<React.SetStateAction<string[]>>]
}
interface FormValues {
  input: string
}

export type TInputMode = 'chars' | 'collection'

const AddCharsForm = ({ SChars }: Props) => {
  const [chars, setChars] = SChars

  //modes: add chars in a single string / add chars separetely
  const [inputMode, setInputMode] = useState<TInputMode>('chars')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const submitHanlder = ({ input }: FormValues) => {
    if (inputMode === 'chars') {
      if (!chars.includes(input)) {
        setChars(prev => [...prev, input])
      }
    } else {
      const newChars = [...Array(input.length)].map((ch, i) => input[i])
      const uniq = Array.from(new Set([...chars, ...newChars]))
      setChars(uniq)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(submitHanlder)}
      className='flex flex-col gap-8'
    >
      <FormHeader title='Characters'>
        <LanguageIcon className='w-8 h-8 text-slate-400' />
      </FormHeader>
      <div className='flex items-center gap-4'>
        <label htmlFor='textLength' className='text-amber-400 text-lg'>
          {inputMode === 'chars' ? 'Add character' : 'Add collection'}
        </label>
        <input
          type='text'
          maxLength={inputMode === 'chars' ? 1 : 42}
          {...register('input')}
          className={`rounded p-1 focus:outline-none ${
            inputMode === 'chars' ? 'w-8' : 'w-32'
          }`}
        />
        <div>
          <SwitchModeSpan
            inputModeState={[inputMode, setInputMode]}
            mode='chars'
          >
            Character
          </SwitchModeSpan>
          <SwitchModeSpan
            inputModeState={[inputMode, setInputMode]}
            mode='collection'
          >
            Collection
          </SwitchModeSpan>
        </div>
      </div>
      <CurrentChars chars={chars} />
      <FormSubmitBtn>
        {`Add ${inputMode === 'chars' ? 'character' : 'collection'}`}
        <PlusIcon className='w-6 h-6' />
      </FormSubmitBtn>
    </form>
  )
}

export default AddCharsForm
