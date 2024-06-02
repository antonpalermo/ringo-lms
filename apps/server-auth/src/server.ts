import express, { type Express } from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'

import { ExpressAuth } from '@auth/express'
import Google from '@auth/express/providers/google'

export function createExpressServer(): Express {
  const app = express()

  app.disable('x-powered-by')

  app.set('port', 8080).set('trust proxy', true)

  app
    .use(helmet())
    .use(morgan('dev'))
    .use(express.json())
    .use(cors({ credentials: true }))
    .use(express.urlencoded({ extended: true }))

  app.use(
    '/api/auth/*',
    ExpressAuth({
      providers: [
        Google({
          clientId: '',
          clientSecret: ''
        })
      ]
    })
  )

  return app
}
