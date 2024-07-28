import express from "express";
import path from 'path'
import { fileURLToPath } from "url";
// import giftData from "../data/gifts.js";
import GiftsController from '../controllers/gifts.js'

// import.meta.url contains the URL of the current module file
// convert url to file path, so this is curFile
const __filename = fileURLToPath(import.meta.url)
// contain the directory name of the file
const __dirname = path.dirname(__filename)

const router = express.Router()

// at the root / endpoint, response with status 200 and sends a JSON of giftData
// router.get('/',(req,res)=>{
//     res.status(200).json(giftData)
// })
router.get('/', GiftsController.getGifts)

router.get('/:giftId', (req,res)=>{
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router