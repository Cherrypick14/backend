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

 router.get('/', async(req, res)=>{
     try {
       const getPosts = await Post.find();
         res.status(200).json(getPosts)
     } catch (error) {
         res.status(500).json(error);
     }
 })
 router.get('/:id', async (req, res)=>{
       try {
         const getPost = await Post.findById(req.params.id);
         res.status(200).json(getPost)
       } catch (error) {
         res.status(500).json(error);
       }
 })
 
 module.exports = router;