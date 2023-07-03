import express from 'express'
import usersRouter from './routers/users.router.js'
import MongoClient from './config/MongoClient.js'

const app = express()
app.use(express.json())
app.use('/api/users', usersRouter)

let client = new MongoClient()
client.connect()

app.listen(8080, () => console.log('Server Up!'))