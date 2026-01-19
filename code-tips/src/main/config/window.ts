import { BrowserWindow, globalShortcut, shell, screen } from 'electron'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'
import { is } from '@electron-toolkit/utils'
import url from 'node:url'

export function createWindow(): BrowserWindow {
  const { width:screenWidth } = screen.getPrimaryDisplay().workAreaSize
  const width = 1250;
  const configWindow = new BrowserWindow({
    width,
    height: 650,
    x: screenWidth - width,
    y: 0,
    // center: true,
    frame: false,
    transparent: true,
    show: false,
    alwaysOnTop: true,
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
    configWindow.loadURL(process.env['ELECTRON_RENDERER_URL']+'/#config')
  } else {
    url.format({
      //编译后的文件
      pathname: join(__dirname, '../renderer/index.html'),
      //协议
      protocol: 'file',
      //protocol 后面需要两个/
      slashes: true,
      //hash 的值
      hash: 'config'
    }) 
  }
  // 打开configWindow调试工具
  if (is.dev) {
    globalShortcut.register('CommandOrControl+alt+i', () => {
      configWindow.webContents.openDevTools()
    })
  }

  return configWindow
}
