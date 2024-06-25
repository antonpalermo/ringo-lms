import express, { type Router } from 'express'

const router: Router = express.Router()

router.get('/healthz', (req, res) => {
  return res.status(200).json({ status: 'healthy', ok: true })
})

export default router
