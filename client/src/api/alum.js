import axios from "./axios";



export const getCursosRequest = async () => axios.get("cursos");

export const addUserRequest = async (id) => axios.post(`addUser/${id}`);

export const getCalificacionesRequest = async () => axios.get("calificaciones");

//Curos
export const createCursoRequest = async (curso) => axios.post("cursos", curso);

export const getCursoRequest = async (id) => axios.get(`cursos/${id}`);

// export const getCursoAlumRequest = async (id) => axios.get(`cursosAlum/${id}`);

export const updateCursoRequest = async (id, curso) =>axios.put(`cursos/${id}`, curso);

export const deleteCursoRequest = async (id) => axios.delete(`cursos/${id}`);

 //Alumnos
 export const getAlumnosRequest = async () => axios.get("alumnos");

 export const getProfesoresRequest = async () => axios.get("profesores");

 export const getAlumnoRequest = async (id) => axios.get(`alumnos/${id}`);

 export const updateAlumnoRequest = async (id, alumno) =>axios.put(`alumnos/${id}`, alumno);
 
 export const deleteAlumnoRequest = async (id) => axios.delete(`alumnos/${id}`);

//CALIFICAR

export const getCalificacionRequest = async (id) => axios.get(`calificar/${id}`);

export const updateCalificacionRequest = async (id, calificacion) =>axios.put(`calificar/${id}`, calificacion);


