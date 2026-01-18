import { BrowserWindow, IgnoreMouseEventsOptions, IpcMainEvent, ipcMain } from 'electron'
import { createConfigWindow } from '../config'

ipcMain.on(
  'setIgnoreMouseEvents',
  (event: IpcMainEvent, ignore: boolean, options?: IgnoreMouseEventsOptions) => {
    const win = BrowserWindow.fromWebContents(event.sender)
    win?.setIgnoreMouseEvents(ignore, options)
  }
)

ipcMain.on('hiddenWindow',(event: IpcMainEvent)=>{
   const win = BrowserWindow.fromWebContents(event.sender)
   win?.hide()
})

ipcMain.on('openConfigWindow',()=>{
   createConfigWindow()
})