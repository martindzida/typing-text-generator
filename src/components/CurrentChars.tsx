interface Props {
  chars: string[]
}

const CurrentChars = ({ chars }: Props) => {
  return (
    <div className='flex items-center gap-4 text-amber-400 '>
      <span className='text-lg'>Current chars:</span>
      <pre className='text-2xl'>{`[${chars}]`}</pre>
    </div>
  )
}

export default CurrentChars
