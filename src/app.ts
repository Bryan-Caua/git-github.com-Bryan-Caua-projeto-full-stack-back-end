import express from "express"
import 'express-async-errors'
import "reflect-metadata"
import userRoutes from "./routers/users.routes"
import handleError from "./errors/handleError"

const app = express()
app.use(express.json())

app.use('/users', userRoutes)

app.use(handleError)

export default app