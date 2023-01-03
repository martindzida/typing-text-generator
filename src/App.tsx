import { useForm } from 'react-hook-form'

interface FormValues {
  textLength: number
}

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>()

  const submitHanlder = (data: FormValues) => {
    console.log(data)
  }

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-slate-700 font-mono'>
      <h1 className='text-amber-400 text-6xl p-16'>Typing Text Generator</h1>
      <form
        onSubmit={handleSubmit(submitHanlder)}
        className='flex flex-col gap-8 bg-slate-600 p-16 rounded border-2 border-amber-400'
      >
        <input type='text' {...register('textLength')} />
        <input
          type='submit'
          value='Generate'
          className='bg-amber-400 text-slate-900 font-medium text-lg rounded p-2'
        />
      </form>
    </div>
  )
}

export default App
