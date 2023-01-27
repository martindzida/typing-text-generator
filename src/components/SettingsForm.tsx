import { useForm } from 'react-hook-form'
import genText from '../utils/genText'
import { Dispatch, SetStateAction } from 'react'
import { Cog6ToothIcon, DocumentTextIcon } from '@heroicons/react/24/outline'

interface FormValues {
  textLength: number
  minWordLength: number
  maxWordLength: number
}

interface Props {
  getGeneratedText: Dispatch<SetStateAction<string | null>>
}

const SettingsFrom = ({ getGeneratedText }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      textLength: 50,
      minWordLength: 2,
      maxWordLength: 8,
    },
  })

  const submitHanlder = ({
    textLength,
    minWordLength,
    maxWordLength,
  }: FormValues) => {
    const text = genText(
      ['a', 'b', 'c'],
      Number(textLength),
      Number(minWordLength),
      Number(maxWordLength)
    )
    getGeneratedText(text)
  }
  return (
    <form
      onSubmit={handleSubmit(submitHanlder)}
      className='flex flex-col gap-8'
    >
      <div className='flex justify-center items-center gap-4 pb-8'>
        <h3 className='text-amber-400 text-4xl'>Options</h3>
        <Cog6ToothIcon className='w-8 h-8 text-slate-400' />
      </div>
      <div className='flex items-center gap-8'>
        <label htmlFor='textLength' className='text-amber-400 text-lg'>
          Text length (words):
        </label>
        <input
          type='text'
          {...register('textLength', { min: 1, max: 100 })}
          className='rounded p-1 focus:outline-none'
        />
      </div>
      <div className='flex items-center gap-8'>
        <label className='text-amber-400 text-lg'>Word length</label>
        <label htmlFor='minWordLength' className='text-amber-400 text-lg'>
          Min:
        </label>
        <input
          type='text'
          {...register('minWordLength', { min: 2, max: 100 })}
          className='rounded p-1 focus:outline-none'
        />
        <label htmlFor='maxWordLength' className='text-amber-400 text-lg'>
          Max:
        </label>
        <input
          type='text'
          {...register('maxWordLength', { min: 2, max: 100 })}
          className='rounded p-1 focus:outline-none'
        />
      </div>

      <button
        type='submit'
        className='flex justify-center gap-4 items-center bg-amber-400 text-slate-900 font-medium text-lg rounded p-3 mt-4'
      >
        Generate <DocumentTextIcon className='w-6 h-6' />
      </button>
    </form>
  )
}

export default SettingsFrom
