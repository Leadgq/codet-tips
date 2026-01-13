import { BrowserWindow, shell } from 'electron'
import { screen } from 'electron'
import { join } from 'path'
import icon from '../../../resources/icon.png?asset'
import './ipc'
import { is } from '@electron-toolkit/utils'

export function createWindow() {
  const { width } = screen.getPrimaryDisplay().workAreaSize
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    x: width - 600, 
    y: 50,
    show: false,
    frame: false,
    transparent: true,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })


  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}
