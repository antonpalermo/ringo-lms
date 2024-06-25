import express, { type Express } from 'express'

import statusRoutes from './routes/status'
import coursesRoutes from './routes/courses'

function createServer() {
  const app: Express = express()

  app.use(express.json()).use(express.urlencoded({ extended: true }))

  app.use('/status', statusRoutes)
  app.use('/courses', coursesRoutes)

  return app
}

export default createServer
