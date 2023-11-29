import mongoose from "mongoose";

const cursoSchema = new mongoose.Schema({

    nombre: {
        type: String,
        // trim: true,
        // unique: true,
    },

    comisión: {
        type: String,
        // requiered: true,
        // trim: true,
        // unique: true,
    },
    año: {
        type: String,
    },


    materias: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Materia", 
        },],

    alumnos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], 

    profesor:
        { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

export default mongoose.model("Curso", cursoSchema);
