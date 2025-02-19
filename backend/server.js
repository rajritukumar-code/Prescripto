import express from 'express'
import cors from 'cors'
import 'dotenv/config'
 import connectDB from './config/mongodb.js'
 import conectcloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'

//  app config
const app=express()
const port= process.env.port || 4000
connectDB()
conectcloudinary()

// middlewares
app.use(express.json())
app.use(cors())

//api endpoint
app.use('/api/admin',adminRouter)
//localhost:4000/api/admin/add-doctor

app.get('/',(req,res)=>{
    res.send('Api WORKING grate')
})
app.listen(port,()=>console.log("server Started",port))