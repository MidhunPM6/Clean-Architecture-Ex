const mongoose =require('mongoose')

const connectDB=()=>{
    mongoose.connect("mongodb://localhost:27017/CleanExample",{
    dbName : 'Cleansample'
}).then(()=>
    console.log("MongoDB conneted")      
)     

}

connectDB()

module.exports=connectDB