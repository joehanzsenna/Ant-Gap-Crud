import express from "express"
import { create, deleteUser, fetch, update, getSinglePost } from "../controller/userController.js";

const route = express.Router();

route.get("/getallusers", fetch)
route.get("/getsingleuser/:id", getSinglePost)
route.post ("/create",create)
route.put("/update/:id", update)
route.delete("/delete/:id",deleteUser)

export default route;

