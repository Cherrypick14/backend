const express =require("express");
const dotenv = require("dotenv")
const PORT = process.env.PORT || 5000
const connectedDB = require("./database/connect");
const postrouter = require("./routes/post");
const user_router=require("./routes/user");

const app = express();
 dotenv.config();

 //db connection
connectedDB(process.env.MONGO_URL)
//middlewares
 app.use(express.json());
 
 app.use(express.urlencoded({extended:true}))
//endpoints
app.use('/api/v1/post', postrouter)
app.use('/api/v1/user', user_router)
app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`);
})

