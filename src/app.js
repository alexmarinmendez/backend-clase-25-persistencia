import express from 'express'
import usersRouter from './routers/users.router.js'

const app = express()
app.use(express.json())
app.use('/api/users', usersRouter)

app.listen(8080, () => console.log('Server Up!'))