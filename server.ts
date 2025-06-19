import express from 'express'
import next from 'next'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const PORT = process.env.PORT || 3005

const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()


app.prepare().then(()=>{
    const server = express()

    server.use(cors())
    
    server.all('*', (req,res)=>{
        return handle(req,res)
    })
    
    server.listen(PORT, ()=>{
        console.log(`> Ready on http://localhost:${PORT}`)
    })

})