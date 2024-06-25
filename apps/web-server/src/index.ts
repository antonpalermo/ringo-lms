import createServer from './server'

const app = createServer()
const port = process.env.PORT || 8080

app.listen(8080, () => console.log(`server started: http://localhost:${port}`))
