
import express from "express";
import {
    createUser,
    deleteUser,
    getUsers,
    updateUser
} from "../controller/userController.js";

const router = express.Router();

router.post("/create", createUser);
router.get("/all", getUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUser);

export default router;
