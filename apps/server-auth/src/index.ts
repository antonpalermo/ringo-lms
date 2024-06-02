import { createExpressServer } from './server'

const main = async () => {
  const server = createExpressServer()

  server.get('/status', (_, res) => {
    res
      .status(200)
      .json({ live: true, status: 'ok', message: "server's up and running" })
  })

  server.listen(8080, () => {
    console.log(`server started on http://localhost:8080`)
  })
}

main().catch(e => console.log(e))
