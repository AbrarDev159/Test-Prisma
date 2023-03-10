const express = require('express')
// import prisma from "./prisma" // importing the prisma instance we created.

const app = express()
app.use(express.json())
const PORT = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })