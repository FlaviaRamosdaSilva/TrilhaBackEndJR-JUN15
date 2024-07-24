import { Router } from 'express'
import UserController from './Controllers/userController.js'

const routes = new Router()

routes.get('/', (req, res) => {
  return res.json({ message: 'Hello World' })
})

// Rota para criar um novo usuário
routes.post('/users', UserController.store)

export default routes
