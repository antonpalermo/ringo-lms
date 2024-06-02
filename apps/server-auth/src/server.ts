import express, { type Express } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

export function createExpressServer(): Express {
  const app = express()

  app.set('port', 8080)
  app.disable('x-powered-by')

  app
    .use(helmet())
    .use(morgan('dev'))
    .use(express.json())
    .use(cors({ credentials: true }))
    .use(express.urlencoded({ extended: true }))

  return app
}
