import express from 'express'
import "./config/dotenv.js"

import giftRouter from './routes/gifts.js'

const app = express()
// to serve static files, such as images, html page. we need to set up the express.static
app.use('/public',express.static('./public'))
app.use('/scripts',express.static('./public/scripts'))
app.use('/gifts', giftRouter)

app.get('/', (req,res)=>{
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
})

const PORT = process.env.PORT ||3001

app.listen(PORT, ()=>{
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
})