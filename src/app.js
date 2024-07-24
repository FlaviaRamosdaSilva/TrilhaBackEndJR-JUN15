//import { openDb } from './configDB.js'
import express from 'express'
import { createTable } from './Controllers/User.js'
import routes from './routes.js'

createTable()
class App {
  constructor() {
    this.app = express()
    this.routes()
    this.middlewares()
  }

  middlewares() {
    this.app.use(express.json())
  }

  routes() {
    this.app.use(routes)
  }
}
export default new App().app
