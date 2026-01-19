import { ipcMain } from 'electron/main'
import * as query from './query'

ipcMain.handle('sql', (_event, sql: string, type: sqlType) => {
  return query[type](sql)
})
