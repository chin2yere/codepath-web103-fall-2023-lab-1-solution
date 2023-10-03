import express from 'express'
//import path from 'path'
import GiftsController from '../controllers/gifts.js'

//import { fileURLToPath } from 'url'

import giftData from '../data/gifts.js'

//const __filename = fileURLToPath(import.meta.url)
//const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', GiftsController.getGifts)

router.get('/:giftId', GiftsController.getGiftById)

export default router
