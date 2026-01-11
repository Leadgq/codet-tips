import { codeContext, CodeContextValue } from "@renderer/CodeContext/context"
import { useContext } from "react"

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


export function  useCodeContext(): CodeContextValue {
  const context = useContext(codeContext)
  if (!context?.resultData) {
    throw new Error('useCodeContext must be used within a CodeContextProvider')
  }
  return context
}