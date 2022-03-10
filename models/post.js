const {Schema, model} = require("mongoose");


const blogSchema = new Schema({
      title : {
            type : String,
            unique: true,
            required: true,

      },
      author : {
           type: String,
           required: true,
      },
       desc : {
             type: String,
             required : true,
       },
       
},
{timestamps: true},
);

module.exports = model("post", blogSchema)