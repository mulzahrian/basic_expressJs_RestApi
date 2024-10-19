const express = require("express");
const userController = require("../controller/users");
const mysql = require("mysql2");

const router = express.Router();

// CREATE - POST
router.post("/", userController.createNewUser);
// READ - GET
router.get("/", userController.getAllUser);
// UPDATE - PATCH
router.patch("/:id", userController.updateUser);
// DELETE - DELETE
router.delete("/:id", userController.deleteUser);

module.exports = router;
