const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    img:{
        type:String,
        required:true
    },
    coin:{
        type:String,
        required:true
    },
    dollar:{
        type:String,
        required:true
    },
    percentage:{
        type:String,
        required:true
    },
    number:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
   
    
    

})
 
const Transaction = mongoose.model("Transaction",transactionSchema);
module.exports=Transaction;
