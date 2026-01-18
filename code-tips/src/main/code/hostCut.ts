import { app, BrowserWindow, globalShortcut, ipcMain } from 'electron'

const config = {
  search: ''
}

export function registerShortCut(window: BrowserWindow) {
  app.commandLine.appendSwitch('enable-features', 'GlobalShortcutsPortal')

  ipcMain.handle('registerShortCut', async (_, shotCur: string, type: 'search' | 'config') => {
    if (config.search) {
      globalShortcut.unregister(config.search)
    }
    config.search = shotCur
    switch (type) {
      case 'search':
        return registerSearchShortCut(window, shotCur)
      case 'config':
        return registerSearchShortCut(window, shotCur)
    }
  })
}

function registerSearchShortCut(window: BrowserWindow, shotCur: string) {
  return globalShortcut.register(shotCur, () => {
    window.isVisible() ? window.hide() : window.show()
  })
}
