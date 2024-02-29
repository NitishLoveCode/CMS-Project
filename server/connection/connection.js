const mongoose = require("mongoose")


const databaseConnect = async() => {
    try{
        const connection = await mongoose.connect(process.env.MONGOCONNECTION)
        console.log(`DataBase is commected with ${connection.connection.name}`)
    }catch(err){
        console.log(err)
    }
}

module.exports = databaseConnect