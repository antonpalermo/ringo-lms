import express, { type Router } from 'express'

import courseController from '../controllers/course.controller'
import { Course } from '@packages/globals-database'

const router: Router = express.Router()

router.get('/', async (_, res) => {
  try {
    const courses = await courseController.getAllCourses()

    return res.status(200).json(courses)
  } catch (error) {
    console.log(error) // TODO: add logger here
    return res.status(500).json({ error: 'internal server error' })
  }
})

router.get('/:id', async (req: express.Request<{ id: string }>, res) => {
  try {
    const id = req.params.id

    if (!id) {
      return res.status(400).json({ error: 'course id is required!' })
    }

    const course = await courseController.getCourse(id)

    if (!course) {
      return res
        .status(404)
        .json({ error: 'course is currently not available' })
    }

    return res.status(200).json(course)
  } catch (error) {
    console.log(error) // TODO: add logger here
    return res.status(500).json({ error: 'internal server error' })
  }
})

router.post(
  '/create',
  async (
    req: express.Request<any, any, Pick<Course, 'name' | 'description'>>,
    res
  ) => {
    try {
      const payload = req.body

      const createdCourse = await courseController.createCourse(payload)

      return res.status(201).json(createdCourse)
    } catch (error) {
      console.log(error) // TODO: add logger here
      return res.status(500).json({ error: 'internal server error' })
    }
  }
)

router.patch(
  '/:id/update',
  async (req: express.Request<{ id: string }>, res) => {
    try {
      const id = req.params.id
      const course = req.body

      if (!id) {
        return res.status(400).json({ error: 'course id is required!' })
      }

      const updatedCourse = await courseController.updateCourse(id, course)

      return res.status(200).json(updatedCourse)
    } catch (error) {
      console.log(error) // TODO: add logger here
      return res.status(500).json({ error: 'internal server error' })
    }
  }
)

router.delete(
  '/:id/delete',
  async (req: express.Request<{ id: string }>, res) => {
    try {
      const id = req.params.id
      if (!id) {
        return res.status(400).json({ error: 'course id is required!' })
      }
      const deletedCourse = await courseController.deleteCourse(id)
      return res.status(200).json(deletedCourse)
    } catch (error) {
      console.log(error) // TODO: add logger here
      return res.status(500).json({ error: 'internal server error' })
    }
  }
)

export default router
