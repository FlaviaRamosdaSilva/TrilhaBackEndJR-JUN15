import express from 'express'
import { createTable } from './Controllers/User.js'
import routes from './routes.js'

// Função assíncrona para criar a tabela no início
;(async () => {
  await createTable()
})()

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
