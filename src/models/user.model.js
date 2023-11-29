import mongoose from "mongoose"

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        requiered: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        requiered: true,
    },

    roles: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Role",
        },],
    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    phone: { type: String, trim: true },
    bornDate: { type: Date },
    isActive: { type: Boolean, default: true },
},
    {
        timestamps: true,
    });

export default mongoose.model("User", userSchema);

