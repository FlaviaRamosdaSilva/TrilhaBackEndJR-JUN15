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

export async function insertUser(user) {
  console.log('Inserting user:', user) // Adicione este log

  if (
    !user ||
    !user.name ||
    !user.email ||
    !user.password_hash ||
    user.admin === undefined
  ) {
    throw new Error('Invalid user data')
  }

  const db = await openDb()
  await db.run(
    `
    INSERT INTO Users (name, email, password_hash, admin)
    VALUES (?, ?, ?, ?)
  `,
    [user.name, user.email, user.password_hash, user.admin]
  )
}
