import * as Yup from 'yup'
import { openDb } from '../configDB.js'

// Define o schema de validação com Yup
const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  admin: Yup.boolean().required('Admin flag is required'),
})

class UserController {
  async store(request, response) {
    const { body } = request

    try {
      await schema.validate(body, { abortEarly: false })
      const db = await openDb()
      await db.run(
        `
        INSERT INTO Users (name, email, password_hash, admin)
        VALUES (?, ?, ?, ?)
      `,
        [body.name, body.email, body.password, body.admin]
      )

      // Responde com sucesso
      return response.status(201).json({ message: 'User created successfully' })
    } catch (error) {
      // Se a validação falhar ou ocorrer um erro ao inserir no banco, responde com erro
      console.error('Error:', error)
      return response
        .status(400)
        .json({ error: error.errors || 'Failed to create user' })
    }
  }
}

export default new UserController()
