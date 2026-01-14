import { ResultDataInterFace } from '@renderer/Data'
import { create } from 'zustand'

interface props {
  resultData: ResultDataInterFace[]
  setResultData: (data: ResultDataInterFace[]) => void
  searchText: string
  setSearchText: (text: string) => void
}

export const useCodeStore = create<props>((set) => ({
  resultData:[],
  setResultData: (data: ResultDataInterFace[]) => set({ resultData: data }),
  searchText: '',
  setSearchText: (text: string) => set({ searchText: text }),
}))
