import { contextBridge, ipcRenderer ,IgnoreMouseEventsOptions} from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
    setIgnoreMouseEvents: (ignore: boolean, options?: IgnoreMouseEventsOptions) => {
    ipcRenderer.send('setIgnoreMouseEvents', ignore, options)
  },
  hiddenWindow: () => {
    ipcRenderer.send('hiddenWindow')
  },
  registerWindowShortCut: (shotCur: string, type: 'search' | 'config') => {
    return ipcRenderer.invoke('registerShortCut', shotCur, type)
  },
  // open config window
  openConfigWindow: () => {
    ipcRenderer.send('openConfigWindow')
  },
  // sql query
  sql: <T>(sql: string, type: sqlType) => {
    return ipcRenderer.invoke('sql', sql, type) as Promise<T>
  }
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
