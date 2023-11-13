import mongoose from "mongoose";

const materiaSchema = new mongoose.Schema({

    nombre: {
        type: String,
        requiered: true,
        trim: true,
        unique: true,
    },


    horario: {
        type: String,
        requiered: true,
        trim: true,
        unique: true,
    },

    profesor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', // Hace referencia al modelo de usuario para el profesor
    },
    // alumnos: [{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User', // Hace referencia al modelo de usuario para los alumnos
    // }],
});

export default mongoose.model('Materia', materiaSchema);
