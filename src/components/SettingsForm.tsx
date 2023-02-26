import { useForm } from 'react-hook-form'
import genText from '../utils/genText'
import { Dispatch, SetStateAction } from 'react'
import { Cog6ToothIcon, DocumentTextIcon } from '@heroicons/react/24/outline'
import FormHeader from './FormHeader'
import FormSubmitBtn from './FormSubmitBtn'

interface Props {
  chars: string[]
  getGeneratedText: Dispatch<SetStateAction<string | null>>
}
interface FormValues {
  textLength: number
  minWordLength: number
  maxWordLength: number
}

const SettingsForm = ({ chars, getGeneratedText }: Props) => {
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
      chars,
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
      <FormHeader title='Options'>
        <Cog6ToothIcon className='w-8 h-8 text-slate-400' />
      </FormHeader>
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

      <FormSubmitBtn>
        Generate <DocumentTextIcon className='w-6 h-6' />
      </FormSubmitBtn>
    </form>
  )
}

export default SettingsForm
