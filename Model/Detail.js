const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const detailSchema = new Schema({
    img:{
        type:String,
        required:true
    },
    txt:{
        type:String,
        required:true
    },
    txt1:{
        type:String,
        required:true
    },
    img1:{
        type:String,
        required:true
    },
    vol:{
        type:String,
        required:true
    },
    floor:{
        type:String,
        required:true
    },
    best:{
        type:String,
        required:true
    },
    bid:{
        type:String,
        required:true
    },
    end:{
        type:String,
        required:true
    },
    availability:{
        type:String,
        required:true
    }

    
    

})
 
const Detail = mongoose.model("Detail",detailSchema);
module.exports=Detail;
