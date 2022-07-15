import express from 'express'

const app = express()

app.get('/', (req: any, res: any) => {
    return res.json({message: "Hello World"})
})

app.listen(8085)