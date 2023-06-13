const express = require("express");
const router = express.Router();
const userCtrl = require("../controllers/userCtrl");
const authMiddleware = require("../middlewares/authMiddleware");

router.get("/signin", userCtrl.getSignin);
router.get("/signup", userCtrl.getSignup);
router.get("/profile", userCtrl.getUser);

router.post("/signin", userCtrl.postSignin);
router.post("/signup", userCtrl.postSignup);

router.patch("/profile", authMiddleware, userCtrl.updateUser);
router.delete("/", authMiddleware, userCtrl.getUser);
module.exports = router;
