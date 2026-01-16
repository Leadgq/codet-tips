import { app, BrowserWindow, dialog, globalShortcut, ipcMain } from 'electron'

const config = {
  search: ''
}

export function registerShortCut(window: BrowserWindow) {
  app.commandLine.appendSwitch('enable-features', 'GlobalShortcutsPortal')

  ipcMain.on('registerShortCut', async (_, shotCur: string, type: 'search' | 'config') => {
    if (config.search) {
      globalShortcut.unregister(config.search)
    }
    config.search = shotCur
    switch (type) {
      case 'search':
        registerSearchShortCut(window, shotCur)
        break
    }
  })
}

function registerSearchShortCut(window: BrowserWindow, shotCur: string) {
  const ret = globalShortcut.register(shotCur, () => {
    window.isVisible() ? window.hide() : window.show()
  })

  if (!ret) {
    dialog.showErrorBox('注册快捷键失败', '请检查是否已注册其他应用使用该快捷键')
  }
}
