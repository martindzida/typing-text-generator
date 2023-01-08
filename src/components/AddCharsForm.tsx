import { useState } from 'react'
import { useForm } from 'react-hook-form'

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
    <form onSubmit={handleSubmit(submitHanlder)} className='flex flex-col'>
      <div className='flex items-center gap-8'>
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
      <input
        type='submit'
        value='Add character'
        className='bg-amber-400 text-slate-900 font-medium text-lg rounded p-3 mt-8 hover:cursor-pointer'
      />
    </form>
  )
}

export default AddCharsForm
