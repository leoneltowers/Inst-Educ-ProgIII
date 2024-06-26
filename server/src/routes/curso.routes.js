import { Router } from "express";
import {
  
  createCurso,
  deleteCurso,
  getCursos,
  getCurso,
  updateCurso,
  addUserCursos,
  getCalificaciones,
  createCalif,
  getCalificacion,
  updateCalificacion
} from "../controllers/curso.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { createMateria } from "../controllers/curso.controllers.js";

const router = Router();

router.get("/cursos", auth, getCursos);
router.post("/cursos", auth, createCurso);
router.get("/cursos/:id", auth, getCurso);
router.put("/cursos/:id", auth, updateCurso);
router.delete("/cursos/:id", auth, deleteCurso);

router.get("/cursosAlum/:id", auth, getCurso); 

router.post("/addUser/:id", auth, addUserCursos);
router.post("/materias", auth, createMateria);


router.get("/calificaciones", auth, getCalificaciones);
router.get("/calificar/:id", auth, getCalificacion );
router.put("/calificar/:id", auth, updateCalificacion);

router.post("/addCalif", auth, createCalif);

export default router;
