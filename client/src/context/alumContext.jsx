import { createContext, useContext, useState } from "react";
import {
  getAlumnosRequest,
  addUserRequest,
  getCursosRequest,
  getCalificacionesRequest,
  createCursoRequest,
  getCursoRequest,
  updateCursoRequest,
  deleteCursoRequest,
  getAlumnoRequest,
  updateAlumnoRequest,
  deleteAlumnoRequest

} from "../api/alum";

const AlumContext = createContext();

export const useAlumnos = () => {
  const context = useContext(AlumContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export function AlumProvider({ children }) {//que hace esto??
  const [alumnos, setAlumnos] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [calificaciones, setCalificaciones] = useState([]);

  


  const addUser = async (id) => {
    try {
      await addUserRequest(id);
    } catch (error) {
      console.error(error);
    }
  };

  const getCalificaciones = async () => {
    const res = await getCalificacionesRequest();
    setCalificaciones(res.data);
    console.log(res.data);
  };

  //CRUD CURSOS

  const getCursos = async () => {
    const res = await getCursosRequest();
    setCursos(res.data);
  };

  const createCurso = async (curso) => {
    try {
      const res = await createCursoRequest(curso);
      // console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  const getCurso = async (id) => {
    try {
      const res = await getCursoRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateCurso = async (id, curso) => {
    try {
      await updateCursoRequest(id, curso);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteCurso = async (id) => {
    try {
      const res = await deleteCursoRequest(id);
      if (res.status === 204) setCursos(cursos.filter((curso) => curso._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  //alumnos

  const getAlumnos = async () => {
    const res = await getAlumnosRequest();
    setAlumnos(res.data);
  };

  const getAlumno = async (id) => {
    try {
      const res = await getAlumnoRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateAlumno = async (id, alumno) => {
    try {
      await updateAlumnoRequest(id, alumno);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteAlumno = async (id) => {
    try {
      const res = await deleteAlumnoRequest(id);
      if (res.status === 204) setAlumnos(alumnos.filter((alumno) => alumno._id !== id));
    } catch (error) {
      console.log(error);
    }
  };


  return (
    <AlumContext.Provider
      value={{
        alumnos,
        getAlumnos,
        addUser,
        calificaciones,
        getCalificaciones,
        cursos,

        getCursos,
        createCurso,
        getCurso,
        updateCurso,
        deleteCurso,
        getAlumno,
        updateAlumno,
        deleteAlumno,
      
      }}
    >
      {children}
    </AlumContext.Provider>
  );
}
