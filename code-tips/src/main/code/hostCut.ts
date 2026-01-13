// const { app, globalShortcut } =
import { app, BrowserWindow, dialog, globalShortcut } from 'electron'

export function registerShortCut(window: BrowserWindow) {
  app.commandLine.appendSwitch('enable-features', 'GlobalShortcutsPortal')

  app.whenReady().then(() => {
    const ret = globalShortcut.register('CommandOrControl+Shift+i', () => {
      window.show()
    })

    if (!ret) {
      dialog.showErrorBox('注册快捷键失败', '请检查是否已注册其他应用使用该快捷键')
    }

    // 检查快捷键是否注册成功
    console.log(globalShortcut.isRegistered('CommandOrControl+Shift+i'))
  })

  app.on('will-quit', () => {
    // 注销所有快捷键
    globalShortcut.unregisterAll()
  })
}
