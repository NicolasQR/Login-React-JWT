const { jsonRespone } = require("../lib/jsonResponse");

const router = require("express").Router();

router.post("/", (req, res) => {
    const {username, name, password} = req.body;

    if(!!!username || !!!password || !!!name){
        return res.status(400).json(jsonRespone(400, {error: "Fields are required"}));
    }

    res.status(200).json(jsonRespone(200, {message: "User created successfully"}))

    res.send("signup");
});

module.exports = router; 