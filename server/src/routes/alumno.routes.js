import { Router } from "express";
import {
  deleteAlumno,
  getAlumnos,
  getAlumno,
  updateAlumno,
  getProfesores
  
} from "../controllers/curso.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/alumnos", auth,getAlumnos);
router.get("/profesores", auth,getProfesores);
router.get("/alumnos/:id",auth, getAlumno);
router.put("/alumnos/:id",auth,  updateAlumno);
router.delete("/alumnos/:id",auth, deleteAlumno);

export default router;
