import { openDb } from '../configDB.js'

export async function createTable() {
  const db = await openDb()
  await db.exec(`
    CREATE TABLE IF NOT EXISTS Users (
      id INTEGER PRIMARY KEY NOT NULL,
      name STRING NOT NULL,
      email STRING NOT NULL UNIQUE,
      password_hash STRING NOT NULL,
      admin BOOLEAN NOT NULL
    )
  `)
}
