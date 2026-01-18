import { BrowserWindow, globalShortcut, shell } from 'electron'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'
import { is } from '@electron-toolkit/utils'

export function createWindow(): BrowserWindow {
  const configWindow = new BrowserWindow({
    width: 800,
    height: 500,
    center: true,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  configWindow.on('ready-to-show', () => {
    configWindow.show()
  })

  configWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    configWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    configWindow.loadFile(join(__dirname, '../renderer/index.html'))  
  }
  // 打开configWindow调试工具
  if (is.dev) {
    globalShortcut.register('CommandOrControl+alt+i', () => {
      configWindow.webContents.openDevTools()
    })
  }

  return configWindow
}
