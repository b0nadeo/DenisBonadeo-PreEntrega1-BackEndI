import { Router } from "express";
import { createUser, deleteUser, readAllUsers, readUserId, updateUser } from "../../controllers/users.controller.js";
import validDataUsers from "../../middlewares/validDataUsers.mid.js";

const usersRouter = Router()

//aca van mis rutas de users
usersRouter.get("/", readAllUsers)
usersRouter.get("/:uid", readUserId)
usersRouter.put("/:uid", updateUser); // Ruta para actualizar
usersRouter.delete("/:uid", deleteUser); // Ruta para eliminar
usersRouter.post("/", validDataUsers, createUser)// Ruta para crear 



export default usersRouter