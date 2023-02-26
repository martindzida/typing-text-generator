import { useState } from 'react'
import DisplayText from './components/DisplayText'
import Header from './components/Header'
import Footer from './components/Footer'
import GenForm from './components/GenForm'

function App() {
  const [curText, setCurText] = useState<string | null>(null)

  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-slate-700 font-mono p-8'>
      <Header />
      {curText ? (
        <DisplayText text={curText} genNewText={setCurText} />
      ) : (
        <GenForm getGeneratedText={setCurText} />
      )}
      <Footer />
    </div>
  )
}

export default App
