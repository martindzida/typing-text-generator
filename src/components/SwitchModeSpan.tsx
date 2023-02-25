import { TInputMode } from './AddCharsForm'

interface Props {
  inputModeState: [TInputMode, React.Dispatch<React.SetStateAction<TInputMode>>]
  mode: TInputMode
  children: string
}

const SwitchModeSpan = ({ inputModeState, mode, children }: Props) => {
  const [inputMode, setInputMode] = inputModeState
  return (
    <span
      onClick={() => setInputMode(mode)}
      className={`${
        inputMode === mode
          ? 'bg-amber-400 text-slate-900'
          : 'bg-slate-700 text-slate-100'
      } font-medium rounded-lg px-3 py-2 hover:cursor-pointer`}
    >
      {children}
    </span>
  )
}

export default SwitchModeSpan
