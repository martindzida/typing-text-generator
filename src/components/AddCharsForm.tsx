import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { LanguageIcon } from '@heroicons/react/24/outline'

interface FormValues {
  newChar: string
}

const AddCharsForm = () => {
  const [chars, setChars] = useState<string[]>([])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const submitHanlder = ({ newChar }: FormValues) => {
    setChars(prev => [...prev, newChar])
  }

  return (
    <form
      onSubmit={handleSubmit(submitHanlder)}
      className='flex flex-col gap-8'
    >
      <div className='flex justify-center items-center gap-4 pb-8'>
        <h2 className='text-amber-400 text-4xl'>Add characters</h2>
        <LanguageIcon className='w-8 h-8 text-slate-400' />
      </div>
      <div className='flex items-center gap-4'>
        <label htmlFor='textLength' className='text-amber-400 text-lg'>
          New char:
        </label>
        <input
          type='text'
          maxLength={1}
          {...register('newChar')}
          className='rounded p-1 focus:outline-none w-8'
        />
      </div>
      <div className='flex items-center gap-4 text-amber-400 '>
        <span className='text-lg'>Current chars:</span>
        <pre className='text-xl'>{`[${chars}]`}</pre>
      </div>
      <input
        type='submit'
        value='Add character'
        className='bg-amber-400 text-slate-900 font-medium text-lg rounded p-3 mt-4 hover:cursor-pointer'
      />
    </form>
  )
}

export default AddCharsForm
