import express, { type Router } from 'express'
import { db } from '@packages/globals-database'

const router: Router = express.Router()

router.get('/', async (req, res) => {
  try {
    const courses = await db.selectFrom('courses').selectAll().execute()
    return res.status(200).json(courses)
  } catch (error) {
    console.log(error)
    return res.status(500).json({ error: 'internal server error' })
  }
})

export default router
