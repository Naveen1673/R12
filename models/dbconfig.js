const mongoose=require('mongoose')

exports.dbconnection=async function(){
    try{
        mongoose.connect(process.env.MONGO_Url);
        console.log('done')
    }
    catch(error){
        console.log(error.message)
    }
}