import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import Docente from "./pages/adminAlum/Docente";
import Alumno from "./pages/alumno/alumno"

import AllAlumnos from "./pages/adminAlum/allAlumnos"
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { AlumProvider } from "./context/alumContext";
import { ProtectedRoute } from "./protectedRoutes";
import { CursosPage } from "./pages/alumno/CursoPage";
import { CursoPage } from "./pages/adminAlum/CursoPage";
import { CursoFormPage } from "./pages/adminAlum/CursoFormPage";
import { AlumnoPage } from "./pages/adminAlum/AumnoPage";
import { AlumnoFormPage } from "./pages/adminAlum/AumnoFormPage";
import CalificacionesPage from "./pages/alumno/CalificacionesPage";

function App() {
  return (

    <AuthProvider>
      <AlumProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Routes>
            <Route element={<ProtectedRoute />}>
            //admin courses
              <Route path="/docente" element={<Docente />} />
              <Route path="/cursos" element={<CursoPage />} />
              <Route path="/add-curso" element={<CursoFormPage />} />
              <Route path="/cursos/:id" element={<CursoFormPage />} />

            //admin alumno
              <Route path="/alumnos" element={<AlumnoPage />} />
              <Route path="/add-alumno" element={<AlumnoFormPage />} />
              <Route path="/alumnos/:id" element={<AlumnoFormPage />} />

            //alumnos
              <Route path="/alumno" element={<Alumno />} />
              <Route path="/allcursos" element={<CursosPage />} />
              <Route path="/calificaciones" element={<CalificacionesPage />} />
              <Route path="/add-curso" element={<CursoFormPage />} />
            </Route>
          </Routes>
          <Footer />
        </BrowserRouter>
      </AlumProvider>
    </AuthProvider>
  );
}

export default App;
