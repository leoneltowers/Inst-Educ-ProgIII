import mongoose from "mongoose";


const calificacionSchema = new mongoose.Schema({

    alumno: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Hace referencia al modelo de usuario para el alumno
    },
    materia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Materia', // Hace referencia al modelo de curso
    },

    profesor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Hace referencia al modelo de usuario para el profesor
    },

    nota: Number,
});

export default mongoose.model('calificacion', calificacionSchema);