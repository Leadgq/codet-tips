import { BrowserWindow } from 'electron'
import { createWindow } from './window'
let window: BrowserWindow | null = null

export function createConfigWindow() {
  // 单个窗口
  if (!window) {
    window = createWindow()
  }
  window.on('close', () => {
    window = null
  })
}
