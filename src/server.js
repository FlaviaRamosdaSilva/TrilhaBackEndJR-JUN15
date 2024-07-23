import app from './app'

const app = express()

const port = 3000

app.listen(port, () => {
  console.log(`🚀 Server Started on port ${port}`)
})
