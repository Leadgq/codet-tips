import { app, BrowserWindow, dialog, globalShortcut, ipcMain } from 'electron'

export function registerShortCut(window: BrowserWindow) {
  app.commandLine.appendSwitch('enable-features', 'GlobalShortcutsPortal')

  ipcMain.on('shortCur', (_, shotCur) => {
    let shot = shotCur ? shotCur : 'CommandOrControl+Shift+i'
    const ret = globalShortcut.register(shot, () => {
      window.isVisible() ? window.hide() : window.show()
    })

    if (!ret) {
      dialog.showErrorBox('注册快捷键失败', '请检查是否已注册其他应用使用该快捷键')
    }
  })
}
