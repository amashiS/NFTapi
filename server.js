const express = require("express"); // framework
const mongoose = require("mongoose"); // Mongodb framework
const bodyParser = require("body-parser"); // access with body on HTTP req
const cors = require("cors"); // can run more servers at once
const dotenv = require("dotenv")  // env file . Its include security data (Mongodb url)

const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;
mongoose.set("strictQuery", false);

mongoose.connect(URL,{
    
});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("Mongo DB Connected Successfuly done !");
})


 const detailRouter=require("./Routes/details.js")
 app.use("/details",detailRouter); 

 const transactionRouter=require("./Routes/transactions.js")
 app.use("/trc",transactionRouter); 


app.listen(PORT,()=>{
    console.log(`server is up & PORT is "${PORT}`);

})