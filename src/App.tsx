import { useState } from 'react'
import SettingsForm from './components/SettingsForm'
import DisplayText from './components/DisplayText'
import AddCharsForm from './components/AddCharsForm'

function App() {
  const [curText, setCurText] = useState<string | null>(null)

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-slate-700 font-mono'>
      <header>
        <h1 className='text-amber-400 text-6xl p-16 text-center'>
          Typing Text Generator
        </h1>
      </header>
      {curText ? (
        <DisplayText text={curText} genNewText={setCurText} />
      ) : (
        <div className='flex flex-col items-center gap-16 bg-slate-600 p-16 rounded-lg border-2 border-amber-400'>
          <AddCharsForm />
          <div className='w-full h-0.5 bg-slate-400 rounded-full'></div>
          <SettingsForm getGeneratedText={setCurText} />
        </div>
      )}
    </div>
  )
}

export default App
