const express = require("express")
const cors = require("cors")
const path = require("path")

const wall = require("./routes/wall")
const submit = require("./routes/submit")

const app = express()

app.use(cors({
    origin: "*",
}))
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.static(path.join(__dirname, '/public/css')))
app.use(express.static(path.join(__dirname, '/public/js')))

app.get("/", (req, res) => {
    res.status(200).sendFile("/index.html")
})
app.use("/wall", wall)
app.use("/submit", submit)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`);
})