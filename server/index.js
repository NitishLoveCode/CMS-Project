const express = require("express")
require("dotenv").config()
const port = process.env.PORT
const connectionDatabase = require("../server/connection/connection")


// Database connection
connectionDatabase()

const app = express()
app.use(express.json())

app.use("/api/user", require("./routes/user"))



app.listen(port, () => {
    console.log(`Server is running on Port ${port}`)
})


