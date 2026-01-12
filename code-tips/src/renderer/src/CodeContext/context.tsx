import { createContext } from 'react'
import { ResultDataInterFace } from '../Data/index'
import { Dispatch, SetStateAction } from 'react'
import { useImmer } from 'use-immer'

export interface CodeContextValue {
  resultData: ResultDataInterFace[]
  setResultData: Dispatch<SetStateAction<ResultDataInterFace[]>>    
}

export const CodeContext = createContext<CodeContextValue | undefined>(undefined)



export function CodeProvider({ children }: { children: React.ReactNode }): React.JSX.Element {
  const [resultData, setResultData] = useImmer<ResultDataInterFace[]>([])
  return (
      <CodeContext.Provider value={{ resultData, setResultData }}>
        {children}
      </CodeContext.Provider>
  )
}
