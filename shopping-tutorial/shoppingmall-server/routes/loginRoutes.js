const express = require("express");
const User = require("../User");
const bcrypt = require("bcrypt");
const { route } = require("./userRoutes");
const router = express.Router();

router.post("/login", async(req, res)=>{
    const {user_id, password} = req.body;

    try {
        const user = await User.findOne({ where: {user_id}});

        if(!user){
            res
                .status(400)
                .json({error: "해당 아이디를 가진 사용자를 찾을 수 없습니다."});
            return;
        }
        const match = await bcrypt.compare(password, user.password);

        if(!match){
            res.status(400).json({error: "비밀번호가 일치하지 않습니다."});
            return;
        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({error: "서버 에러"});
    }
});

module.exports = router;