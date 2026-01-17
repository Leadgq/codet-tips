import { useCodeStore } from '@renderer/store'
import { useImmer } from 'use-immer'
import { useEffect } from 'react'

export function setIgnoreMouseEvents(): void {
  const el = document.querySelector('#root') as HTMLDivElement
  if (el) {
    el.addEventListener('mouseenter', () => {
      window.api.setIgnoreMouseEvents(false)
    })
  }

  document.body.addEventListener('mouseover', (event: MouseEvent) => {
    if (event.target == document.body) {
      window.api.setIgnoreMouseEvents(true, { forward: true })
    }
  })
}

// export function useCodeContext(): CodeContextValue {
//   const context = useContext(CodeContext)
//   if (!context?.resultData) {
//     throw new Error('useCodeContext must be used within a CodeContextProvider')
//   }
//   return context
// }

export function useSelectCode() {
  const { resultData } = useCodeStore((state) => state)
  const setResultData = useCodeStore((state) => state.setResultData)
  const setCurrentIndex = useCodeStore((state) => state.setCurrentIndex)
  const currentIndex = useCodeStore((state) => state.currentIndex)
  const setSearchText = useCodeStore((state) => state.setSearchText)

  const handleKeyDown = (e: KeyboardEvent) => {
    if (resultData.length === 0) {
      return
    }
    switch (e.code) {
      case 'ArrowUp':
        {
          const index = currentIndex === 0 ? resultData.length - 1 : currentIndex - 1
          setCurrentIndex(index)
        }
        break
      case 'ArrowDown':
        {
          const index = currentIndex === resultData.length - 1 ? 0 : currentIndex + 1
          setCurrentIndex(index)
        }
        break
      case 'Enter':
        selectItem(currentIndex)
        setResultData([])
        setSearchText('')
        break
    }
  }

  function selectItem(index: number) {
    navigator.clipboard.writeText(resultData[index].content)
    window.api.hiddenWindow()
  }

  function clickCodeItem(index: number) {
    setCurrentIndex(index)
    selectItem(index)
  }

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [resultData, currentIndex])

  useEffect(() => {
    setCurrentIndex(0)
  }, [resultData])

  return {
    resultData,
    clickCodeItem
  }
}

export async function useRegisterShortCut(
  shotCur: string = 'CommandOrControl+Shift+i',
  type: 'search' | 'config' = 'search'
) {
  const setError = useCodeStore((state) => state.setError)
  const res = await window.api.registerWindowShortCut(shotCur, type)
  if (!res) {
    setError(`注册快捷键失败, 请检查是否已注册 ${shotCur}`)
  }
}
