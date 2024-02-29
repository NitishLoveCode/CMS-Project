const bcrypt = require("bcrypt")
const signUpUser = require("../models/user/signUp")
const jwt =  require("jsonwebtoken")


//@Des: This is user Signup function
//@API: /api/user/signup
const userSignup = async(req, res) => {
    const {name, email, password} = req.body
    if(!name || !email || !password){
        throw new Error("All filed required")
    }else{
        const anCryptedPass = await bcrypt.hash(password, 10)
        const signupData = await signUpUser.create({
            name,
            email,
            password: anCryptedPass
        })
        res.status(200).json(signupData)
    }
}

//@ This is Login function
//@API: /api/user/login
const userLogin = async(req,res) => {
    const {email, password} =  req.body
    if(!email || !password){
        throw new Error("All field required")
    }
    try{
        const findingUser = await signUpUser.findOne({email})
        if(findingUser){
            console.log(findingUser)
            const passwordMatching = await bcrypt.compare(password,findingUser.password)
            if(passwordMatching){
                res.status(200).json(findingUser)
            }
        }

    }catch(err){
        console.log(err)
    }
}



module.exports = {userSignup, userLogin}