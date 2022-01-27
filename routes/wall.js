const express = require("express")
const cors = require("cors")
const path = require("path")

const router = express.Router()

router.use(cors({
    origin: "*",
}))
router.use(express.static(path.join(__dirname, '/public')))
router.use(express.static(path.join(__dirname, '/public/css')))
router.use(express.static(path.join(__dirname, '/public/js')))

router.get("/", (req, res) => {
    res.status(200).sendFile("wall.html", { root: path.join(__dirname, "../public/pages/") })
})

module.exports = router