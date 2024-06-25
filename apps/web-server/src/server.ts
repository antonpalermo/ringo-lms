import express, { type Express } from 'express'

import statusRoutes from './routes/status'

function createServer() {
  const app: Express = express()

  app.use(express.json()).use(express.urlencoded({ extended: true }))

  app.use('/status', statusRoutes)

  return app
}

export default createServer
