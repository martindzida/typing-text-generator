import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LanguageIcon } from '@heroicons/react/24/outline'

interface FormValues {
  newChar: string
}

type TInputMode = 'chars' | 'collection'

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
      <div className='flex justify-center items-center gap-4 pb-8'>
        <h3 className='text-amber-400 text-4xl'>Characters</h3>
        <LanguageIcon className='w-8 h-8 text-slate-400' />
      </div>
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
          <span
            onClick={() => setInputMode('chars')}
            className={`${
              inputMode === 'chars'
                ? 'bg-amber-400 text-slate-900'
                : 'bg-slate-700 text-slate-100'
            } font-medium rounded-l-lg px-3 py-2 hover:cursor-pointer`}
          >
            Character
          </span>
          <span
            onClick={() => setInputMode('collection')}
            className={`${
              inputMode === 'collection'
                ? 'bg-amber-400 text-slate-900'
                : 'bg-slate-700 text-slate-100'
            } font-medium rounded-r-lg px-3 py-2 hover:cursor-pointer`}
          >
            Collection
          </span>
        </div>
      </div>
      <div className='flex items-center gap-4 text-amber-400 '>
        <span className='text-lg'>Current chars:</span>
        <pre className='text-2xl'>{`[${chars}]`}</pre>
      </div>
      <input
        type='submit'
        value={`Add ${inputMode === 'chars' ? 'character' : 'collection'}:`}
        className='bg-amber-400 text-slate-900 font-medium text-lg rounded p-3 mt-4 hover:cursor-pointer'
      />
    </form>
  )
}

export default AddCharsForm
