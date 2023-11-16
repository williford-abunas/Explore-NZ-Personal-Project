import express from 'express'
import * as db from '../db/db.ts'

const router = express.Router()

router.get('/', async (req, res) => {
  const response = await db.getAllMovies()
  console.log(response)
  res.json(response)
})

export default router