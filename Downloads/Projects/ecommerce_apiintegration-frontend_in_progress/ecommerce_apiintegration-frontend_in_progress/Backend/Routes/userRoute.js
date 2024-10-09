const express = require("express");
const {
  registerUser,
  loginUser,
  logout,
  updateProfile,
} = require("../Controllers/userController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

// User Registration
router.post("/auth/send-signupdata", registerUser);

// User Login
router.post("/auth/send-logindata", loginUser);

// User Logout
router.route("/logout").get(logout);

// Update User Profile
router.route("/me/update").put(isAuthenticatedUser, updateProfile);

module.exports = router;
