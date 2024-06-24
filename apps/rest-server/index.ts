import express from 'express'

const app = express()

app.get('/', (_, res) => {
  return res.status(200).json({ message: 'server ok' })
})

app.listen(8080, () => {
  console.log('server started')
})
