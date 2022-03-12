const User = require("../models/user");
const router = require("express").Router();

router.post('/', async(req, res)=>{
      try {
          const new_user= await new User({
              username:req.body.username,
              email:req.body.email,
              password:req.body.password
          })
           const save_user = await new_user.save()
           res.status(200).json(save_user);
      } catch (error) {
           res.status(500).json("Imagine it failed!")
      }
})
router.get('/', async(req, res)=>{
    try {
        const get_users = await new User.find()
           res.status(200).json(get_users);
        
    } catch (error) {
          res.status(500).json(error)
    }
})

module.exports = router;