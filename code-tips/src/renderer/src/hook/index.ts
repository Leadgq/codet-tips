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
  const { setResultData, setSearchText } = useCodeStore((state) => state)
  const [currentIndex, setCurrentIndex] = useImmer(0)
  const handleKeyDown = (e: KeyboardEvent) => {
    if (resultData.length === 0) {
      return
    }
    switch (e.code) {
      case 'ArrowUp':
        setCurrentIndex((prev) => (prev - 1 < 0 ? resultData.length - 1 : prev - 1))
        break
      case 'ArrowDown':
        setCurrentIndex((prev) => (prev + 1 >= resultData.length ? 0 : prev + 1))
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
    currentIndex,
    clickCodeItem
  }
}
