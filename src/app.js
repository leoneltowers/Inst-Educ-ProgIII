import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import cursoRoutes from "./routes/curso.routes.js";

import alumRoutes from "./routes/alumno.routes.js";
import {createRoles} from "./libs/createRoles.js"
import { FRONTEND_URL } from "./config.js";

const app = express();

createRoles();

app.use(morgan('dev'))
app.use(
    cors({
        origin: FRONTEND_URL,
        credentials: true,
        
      })
    );
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.get('/favicon.ico', (req, res) => res.status(204))
//Routes
app.use("/api", authRoutes);
app.use("/api", cursoRoutes);
app.use("/api", alumRoutes);







// app.use('/', statusRouter)
// app.use('/auth', authRouter)
// app.use('/users', authentication, userRouter)

export default app;
