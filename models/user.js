const{Schema, model} = require("mongoose")


const userSchema = new Schema({
        username:{
              type: String,
              unique : true,
              required:[true, "username cannot be empty"]
        },

        email: {
             type: String,
             unique: true,
             require :[true,"Email cannot be empty" ]
        },
        password:{
              type: String,
              required: true,
              minlength : 8,

        },
       

});

module.exports = model("user", userSchema);