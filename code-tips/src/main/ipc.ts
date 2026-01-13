import { BrowserWindow, IgnoreMouseEventsOptions, IpcMainEvent, ipcMain } from 'electron'

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