const mongoose = require("mongoose")


const post = mongoose.Schema({
    title:{
        require:[true, "all Field mandatory"],
        trim:true,
        type:String
    },
    description:{
        require:[true, "All filed required"],
        trim:true,
        type:String
    },
    content:{
        require:[true, "All filed required"],
        trim: true,
        type:String
    }
},{
    timesStamps:true
})

module.exports = mongoose.model("content",post)