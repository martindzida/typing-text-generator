import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LanguageIcon } from '@heroicons/react/24/outline'
import SwitchModeSpan from './SwitchModeSpan'
import FormHeader from './FormHeader'
import CurrentChars from './CurrentChars'

interface FormValues {
  newChar: string
}

export type TInputMode = 'chars' | 'collection'

const AddCharsForm = () => {
  const [chars, setChars] = useState<string[]>([])

  //modes: add chars in a single string / add chars separetely
  const [inputMode, setInputMode] = useState<TInputMode>('chars')

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const submitHanlder = ({ newChar }: FormValues) => {
    if (!chars.includes(newChar)) {
      setChars(prev => [...prev, newChar])
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
          {inputMode === 'chars' ? 'Add character' : 'Add whole word'}
        </label>
        <input
          type='text'
          maxLength={1}
          {...register('newChar')}
          className='rounded p-1 focus:outline-none w-8'
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
      <input
        type='submit'
        value={`Add ${inputMode === 'chars' ? 'character' : 'collection'}:`}
        className='bg-amber-400 text-slate-900 font-medium text-lg rounded p-3 mt-4 hover:cursor-pointer'
      />
    </form>
  )
}

export default AddCharsForm
