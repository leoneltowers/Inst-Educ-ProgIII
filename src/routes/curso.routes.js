import { Router } from "express";
import {
  createCurso,
  deleteCurso,
  getCursos,
  getCurso,
  updateCurso,
  addUserCursos,
  getCalificaciones,
  createCalif
} from "../controllers/curso.controllers.js";
import { auth } from "../middlewares/auth.middleware.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
// import { createTaskSchema } from "../schemas/task.schema.js";
import { createMateria } from "../controllers/curso.controllers.js";

const router = Router();

router.get("/cursos", getCursos);// he sacado el token

router.post("/cursos", createCurso);

router.get("/cursos/:id", getCurso);

router.put("/cursos/:id",  updateCurso);//auth,

router.delete("/cursos/:id", deleteCurso);







router.post("/addUser/:id", auth, addUserCursos );

router.post("/materias", createMateria);

//notas de un user ALUMNO
router.get("/calificaciones", auth, getCalificaciones);

router.post("/addCalif", createCalif);



//PENDIENTE UP

// router.get("/cursos/:id", auth, getCurso); 

// router.put("/cursos/:id", auth, updateCurso);

// router.delete("/cursos/:id", auth, deleteCurso);

export default router;
