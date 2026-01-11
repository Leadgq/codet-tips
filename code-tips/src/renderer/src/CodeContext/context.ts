import { createContext } from 'react'
import { ResultDataInterFace } from '../Data/index'
import { Dispatch, SetStateAction } from 'react'

export interface CodeContextValue {
  resultData: ResultDataInterFace[]
  setResultData: Dispatch<SetStateAction<ResultDataInterFace[]>>    
}

export const codeContext = createContext<CodeContextValue | undefined>(undefined)
