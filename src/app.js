import express from 'express'
import routes from './routes'

class App {
  constructor() {
    this.app = express()
  }

  routes() {
    this.app.use(routes)
  }
}
export default new App().app
