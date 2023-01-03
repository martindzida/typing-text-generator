import SettingsForm from './components/SettingsForm'

function App() {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center bg-slate-700 font-mono'>
      <h1 className='text-amber-400 text-6xl p-16'>Typing Text Generator</h1>
      <SettingsForm />
    </div>
  )
}

export default App
