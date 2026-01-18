import DataBase, * as BetterSqlite3 from 'better-sqlite3'
import { app } from 'electron'
import { resolve } from 'node:path'

const file = resolve(app.getPath('home'), 'Desktop', 'tips.db')
const db: BetterSqlite3.Database = new DataBase(file, {})
db.pragma('journal_mode = WAL')

export { db }
