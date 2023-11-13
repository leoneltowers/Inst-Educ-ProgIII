import User from "../models/user.model.js";
import Materia from "../models/materia.js";
import Curso from "../models/curso.js";
import Calificacion from "../models/calificacion.js";

//Alumnos
export const getAlumnos = async (req, res) => {
  try {
    const alumnos = await User.find({ roles: "653b073550a96710dbbee046" });
    res.json(alumnos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

export const deleteAlumno = async (req, res) => {
  try {
    const deletedAlumno = await User.findByIdAndDelete(req.params.id);
    if (!deletedAlumno)
      return res.status(404).json({ message: "Alumno not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateAlumno = async (req, res) => {
  try {
    const { firstName,lastName, phone } = req.body;
    const alumnoUpdated = await User.findOneAndUpdate(
      { _id: req.params.id },
      { firstName, lastName, phone },
      { new: true }
    );
    return res.json(alumnoUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getAlumno = async (req, res) => {
  try {
    const alumno = await User.findById(req.params.id);
    if (!alumno) return res.status(404).json({ message: "Course not found" });
    return res.json(alumno);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Asociar alumno a un curso
export const addUserCursos = async (req, res) => {
  try {
    const curso = await  Curso.findById(req.params.id);
    const user = await User.findById(req.user.id);
    if (!curso || !user) {
      return res.status(404).json({ message: 'Curso o usuario no encontrado' });
    }
    curso.alumnos.push(user);
    await curso.save();
    res.json(curso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Cursos
export const getCursos = async (req, res) => {
  try {
    const cursos = await  Curso.find({});
    // Curso.find({ user: req.user.id }).populate("user");
    res.json(cursos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCurso = async (req, res) => {
  try {
    const { nombre, comision, año, materias } = req.body;
    const newCurso = new Curso({
      nombre,
      comision,
      año,
      materias,
    });
    await newCurso.save();
    res.json(newCurso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteCurso = async (req, res) => {
  try {
    const deletedCurso = await Curso.findByIdAndDelete(req.params.id);
    if (!deletedCurso)
      return res.status(404).json({ message: "Curso not found" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateCurso = async (req, res) => {
  try {
    const { nombre, comision, año, materias, alumnos } = req.body;
    const cursoUpdated = await Curso.findOneAndUpdate(
      { _id: req.params.id },
      { nombre, comision, año },
      { new: true }
    );
    return res.json(cursoUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getCurso = async (req, res) => {
  try {
    const curso = await Curso.findById(req.params.id);
    if (!curso) return res.status(404).json({ message: "Course not found" });
    return res.json(curso);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Materia
export const createMateria = async (req, res) => {
  try {
    const { nombre, horario,profesor } = req.body;
    const newMateria = new Materia({
      nombre,
      horario,
      profesor,
    });
    await newMateria.save();
    res.json(newMateria);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

//Calificaciones
export const getCalificaciones = async (req, res) => {
  try {
    const calificaciones = await Calificacion.find({alumno: req.user.id}).populate('materia')
    res.json(calificaciones);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createCalif = async (req, res) => {
  try {
    const { alumno, materia, nota } = req.body;
    const newCalificacion = new Calificacion({
      alumno,
      materia, 
      nota,
    });
    await newCalificacion.save();
    res.json(newCalificacion);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};


