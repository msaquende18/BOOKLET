const express = require("express");
const { cadastrar } = require("../controller/authController");
const router = express.Router();

// /api/auth/cadastrar
router.post("/cadastrar", cadastrar);

// /api/auth/login
// router.post("/login", login);

module.exports = router;
