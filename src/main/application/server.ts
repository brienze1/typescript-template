import express from 'express'
import {Test} from '@/delivery/dto/test'

const app = express()

app.get('/', (req: any, res: any) => {
    return res.json({message: "Hello World"})
})

app.listen(8085)

const test: Test = new Test()