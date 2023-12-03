const { string } = require("yargs")

const mongoose = reqire('mongoose')

const userschema= new mongoose.schema({
     tittle:{
        type: string,
        require: true,
        trim: true,
     },

     fname:{
        type:string,
        required:true,

     },
     lname:{
        type:string,
        type:true,
        required:true,

     },

     email:{
        type:string,
        required:true
     },
     add:{
        state:{
            type:string,
            required:true
        },
        district:{
            type:string,
            required:true
        },

     }
},{timestamp:true}
)

module.exports=mongoose.model('user',useSchema)


  