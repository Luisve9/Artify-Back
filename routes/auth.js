const { Router } = require("express");
const router = Router();
const {
    signupProcess,
    loginProcess,
    getCurrentUser,
    logoutProcess
} = require("../controllers/auth.controller")
const {catchError} = require("../utils")
const uploader = require("../helpers/cloudinary");

router.post("/signup", signupProcess/*catchError(signupProcess)*/)

router.post("/login",loginProcess);

router.get("/logout",logoutProcess)

router.get("/loggedin",getCurrentUser)

module.exports = router;