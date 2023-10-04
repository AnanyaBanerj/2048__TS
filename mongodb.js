const mongoose  = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LoginSignup")
.then(()=>{
    console.log("mongodb connected");
})

.catch(()=>{
    console.log("failed");
})

const logInSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collections = new mongoose.model('Collections',logInSchema)

module.exports= collections