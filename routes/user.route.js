import { Router } from "express";
import { loginController, signUpController } from "../controller/login.controller.js";

const loginRouter = Router();

loginRouter.route("/register").post(signUpController);
loginRouter.route("/login").post(loginController);

export default loginRouter;
