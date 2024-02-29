const express = require("express")
const {homeFeed} = require('../controller/homeFeed')


const router = express.Router()


 
router.route("/new-post").post(homeFeed)


module.exports =router