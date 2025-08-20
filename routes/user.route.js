import express from "express";
import {
  handleRegisterUser,
  handleLoginUser,
  handleGetUser,
  handleDeleteUser,
  handleHome,
  handleUpdateUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", handleHome);
router.get("/user", handleGetUser);
router.post("/user/register", handleRegisterUser);
router.post("/user/login", handleLoginUser);

router.route("/user/:id").delete(handleDeleteUser).patch(handleUpdateUser);

export default router;
