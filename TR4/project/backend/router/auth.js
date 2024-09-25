const express = require("express");
const passport = require("passport");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/google",passport.authenticate('google',{scope : ['profile','email']}));

router.get("/google/callback",passport.authenticate('google',{failureRedirect : "/login"}),
(req,res)=>{
    const token = jwt.sign({id : req.user._id , role : req.user.role} , process.env.JWT_SECRET , {expiresIn : "1h"});
    res.redirect(`http://localhost:5173/googleauth?token=${token}`);
}
);

module.exports = router;