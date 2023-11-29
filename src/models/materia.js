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

    // profesor: 
    
});

export default mongoose.model("Materia", materiaSchema);
