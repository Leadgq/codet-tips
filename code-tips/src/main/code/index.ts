import { app, BrowserWindow } from 'electron'
import { createWindow } from './window'
import './ipc'
import { registerShortCut } from './hostCut'

app.whenReady().then(() => {
  const mainWindow = createWindow()    
  registerShortCut(mainWindow)
})

app.on('activate', function () {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
