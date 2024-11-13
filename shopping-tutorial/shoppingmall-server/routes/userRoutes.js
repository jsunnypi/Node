const express = require("express");
const User = require("../User");
const bcrypt = require("bcrypt");
const router = express.Router();

router.post("/", async(req,res)=>{
    const { user_id, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({user_id, password: hashedPassword});

    res.json(newUser);
});

module.exports = router;