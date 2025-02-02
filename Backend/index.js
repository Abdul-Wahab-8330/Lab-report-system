import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cors from 'cors'

import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

dotenv.config()

const app = express()

const port = process.env.PORT || 4000
const URI = process.env.MongoDB_URI

// connect to MongoDB
try {
    mongoose.connect(URI);
    console.log("connected to MongoDB")
} catch (error) {
    console.log("error: ",error)
}

//cors issue clearing
app.use(cors())
//to convert sent data from body to json
app.use(express.json())


//defining routes
app.use('/book',bookRoute);
app.use('/user',userRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})