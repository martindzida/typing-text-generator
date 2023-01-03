import { useState } from 'react'
import SettingsForm from './components/SettingsForm'
import DisplayText from './components/DisplayText'

function App() {
  const [curText, setCurText] = useState<string | null>(null)

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-slate-700 font-mono'>
      <h1 className='text-amber-400 text-6xl p-16'>Typing Text Generator</h1>
      {curText ? (
        <DisplayText text={curText} genNewText={setCurText} />
      ) : (
        <SettingsForm getGeneratedText={setCurText} />
      )}
    </div>
  )
}

export default App
