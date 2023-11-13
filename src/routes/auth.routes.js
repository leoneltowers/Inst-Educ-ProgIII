import { Router } from "express";
import {
    login,
    register, 
    logout,
    verifyToken,
    // users
} from "../controllers/auth.controller.js";



import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/auth.schema.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login",validateSchema(loginSchema), login);
// router.post("/login",validateSchema(loginSchema), login);

router.post("/logout", verifyToken, logout);


router.get("/verify", verifyToken);


// router.get("/users", users);//add


export default router;