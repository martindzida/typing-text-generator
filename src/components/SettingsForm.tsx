import { useForm } from 'react-hook-form'
import genText from '../utils/genText'
import { Dispatch, SetStateAction } from 'react'

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

  const submitHanlder = (data: FormValues) => {
    const text = genText(
      ['a'],
      data.textLength,
      data.minWordLength,
      data.minWordLength
    )
    getGeneratedText(text)
  }
  return (
    <form
      onSubmit={handleSubmit(submitHanlder)}
      className='flex flex-col gap-8 bg-slate-600 p-16 rounded-lg border-2 border-amber-400'
    >
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

      <input
        type='submit'
        value='Generate'
        className='bg-amber-400 text-slate-900 font-medium text-lg rounded p-2'
      />
    </form>
  )
}

export default SettingsFrom
