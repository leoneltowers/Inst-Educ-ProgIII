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
  deleteAlumnoRequest,
  getCalificacionRequest,
  updateCalificacionRequest,
  getProfesoresRequest

} from "../api/alum";

const AdminContext = createContext();

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error("useTasks must be used within a TaskProvider");
  return context;
};

export function AdminProvider({ children }) {
  const [profesores, setProfesores] = useState([]);
  const [alumnos, setAlumnos] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [calificaciones, setCalificaciones] = useState([]);
  const [cursosAlum, setCursosAlum] = useState([]);

  const addUser = async (id) => {
    try {
      await addUserRequest(id);
    } catch (error) {
      console.error(error);
    }
  };
  //CALIFICACIONES
  const getCalificaciones = async () => {
    const res = await getCalificacionesRequest();
    setCalificaciones(res.data);
    console.log(res.data);
  };


  const getCalificacion = async (id) => {
    try {
      const res = await getCalificacionRequest(id);
      console.log(res.data);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateCalificacion = async (id, calificacion) => {
    try {
      await updateCalificacionRequest(id, calificacion);
    } catch (error) {
      console.error(error);
    }
  };

  //CURSOS

  const getCursos = async () => {
    const res = await getCursosRequest();
    console.log(res.data);
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

      setCursosAlum(res.data);
      console.log("javii", res);
      return res.data;

    } catch (error) {
      console.error(error);
    }
  };

  // const getCursoAlum = async (id) => {
  //   try {
  //   //   const res = await getCursoAlumRequest(id);
  //   //    setCursosAlum(res.data); 
  //   //  console.log("javii", res);
  //   //  return res.data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

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

  //profesores
  const getProfesores = async () => {
    const res = await getProfesoresRequest();
    setProfesores(res.data);
  };

  return (
    <AdminContext.Provider
      value={{
        alumnos,
        profesores,
        getAlumnos,
        addUser,
        calificaciones,
        getCalificaciones,
        getCalificacion,
        getProfesores,
        updateCalificacion,
        cursos,
        cursosAlum,
        getCursos,
        createCurso,
        getCurso,
        // getCursoAlum,
        
        updateCurso,
        deleteCurso,
        getAlumno,
        updateAlumno,
        deleteAlumno,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
}
