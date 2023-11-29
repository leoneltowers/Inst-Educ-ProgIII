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
router.post("/cursos",  createCurso);//auth,
router.get("/cursos/:id",  getCurso);//auth,
router.put("/cursos/:id", auth, updateCurso);
router.delete("/cursos/:id", auth, deleteCurso);

router.get("/cursosAlum/:id",  getCurso); //auth,auth,

router.post("/addUser/:id", auth, addUserCursos);
router.post("/materias", createMateria);


router.get("/calificaciones", auth, getCalificaciones);
router.get("/calificar/:id", getCalificacion );
router.put("/calificar/:id", updateCalificacion);

router.post("/addCalif", createCalif);

export default router;
