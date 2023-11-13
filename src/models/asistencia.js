import mongoose from "mongoose";
import { string } from "zod";


const asistSchema = new mongoose.Schema({

    nomnbre: {
        type: String,
        requiered: true,
        trim: true,
    }



});

export default mongoose.model('Asistencia', asistSchema)