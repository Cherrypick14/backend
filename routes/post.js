 const Post = require("../models/post")
 const router = require("express").Router();

 router.post('/', async(req, res)=>{
   try {
        const newPost = await new Post({
            title: req.body.title,
            author: req.body.author,
            desc: req.body.desc
        })
         const savedpost = await newPost.save()
           res.status(200).json(savedpost);
   } catch (error) {
       res.status(500).json("errrrr");
   }
 })
 
 module.exports = router;