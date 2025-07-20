import express from "express";
import { getPublishedCreation, getUserCreation, toggleLikeCreation } from "../controllers/userController.js";
import { auth } from "../middlewares/auth.js";

const userRouter = express.Router();

userRouter.get('/get-user-creations',auth, getUserCreation);
userRouter.get('/get-published-creations',auth, getPublishedCreation);
userRouter.post('/toggle-like-creations',auth, toggleLikeCreation);
 
export default userRouter;