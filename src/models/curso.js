import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        trim: true,
        unique: true,
    },

    comision: {
        type: String,
        requiered: true,
        trim: true,
        unique: true,
    },
    año: {
        type: String,
    },
    materias: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Materia', // Hace referencia al modelo de usuario para el profesor
    }],

    alumnos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] //tipo usurio alumno

});

export default mongoose.model('Curso', cursoSchema);
