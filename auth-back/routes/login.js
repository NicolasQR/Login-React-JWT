const { jsonRespone } = require("../lib/jsonResponse");

const router = require("express").Router();

router.post("/", (req, res) => {
    const {username, password} = req.body;

    if(!!!username || !!!password){
        return res.status(400).json(jsonRespone(400, {error: "Fields are required"}));
    }


    const accessToken  = "acces_token";
    const refreshToken = "refresh_token"
    const user = {
        id: '1',
        name: "Pendeja",
        username: "de merda"
    }


    res.status(200).json(jsonRespone(200, { user, accessToken, refreshToken}))
});

module.exports = router; 