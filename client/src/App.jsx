import Home from "./pages/home/Home";
import Header from "./components/header/Header";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";

// import Alumno from "./pages/alumno/alumno"

import AllAlumnos from "./pages/adminAlum/allAlumnos"
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AdminProvider } from "./context/adminContext";
import { ProtectedRoute } from "./protectedRoutes";
import { Admin } from './pages/admin';
import { Profesor } from './pages/profesor';
import { Alumno } from './pages/alumno';
import { CssBaseline, ThemeProvider } from '@mui/material'; // reset all default css
import { ColorModeContext, useMode } from './styles/theme';
import { useAuth } from "./context/authContext";

function App() {
  const { user } = useAuth();
  const [theme, coloMode] = useMode();
  return (
    // <AuthProvider>
    <ColorModeContext.Provider value={coloMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AdminProvider>
          <BrowserRouter>
            <Header />
            {user && user.roles && user.roles[0]?.name === 'admin' && (<Admin />)}
            {user && user.roles && user.roles[0]?.name === 'profesor' && (<Profesor />)}
            {user && user.roles && user.roles[0]?.name === 'alumno' && (<Alumno />)}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <Routes>
              <Route element={<ProtectedRoute />}>
              </Route>
            </Routes>
            <Footer />
          </BrowserRouter>
        </AdminProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>

  );
}

export default App;
