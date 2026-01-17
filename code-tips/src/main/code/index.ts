import { app, BrowserWindow, globalShortcut } from 'electron'
import { createWindow } from './window'
import './ipc'
import { registerShortCut } from './hostCut'
import IgnoreMouseEvents from './IgnoreMouseEvents'

app.whenReady().then(() => {
  const mainWindow = createWindow()    
  registerShortCut(mainWindow)
  IgnoreMouseEvents(mainWindow)
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})


app.on('will-quit', () => {
  // 注销所有快捷键
  globalShortcut.unregisterAll()
})
