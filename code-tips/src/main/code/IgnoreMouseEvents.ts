import { BrowserWindow, ipcMain, IpcMainEvent } from 'electron'

export default (window: BrowserWindow) => {
  ipcMain.on('setIgnoreMouseEvents', (_event: IpcMainEvent, ignore, options?: { forward: boolean }) => {
    window.setIgnoreMouseEvents(ignore, options)
  })
}
