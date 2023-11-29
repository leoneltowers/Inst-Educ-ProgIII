import React from 'react'
import { Dashboard,  SidebarMenu,  Topbar } from './index';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import CalificacionesPage  from "./inputs/CalificacionesPage";

import './../../styles/index.css';

function Alumno() {
  return (
    <main className="app">

            <SidebarMenu />

            <section className="content">
              <Topbar />

              <Routes>
                <Route path="/alumno-home" element={<Dashboard />} />

                <Route path="/calificaciones" element={<CalificacionesPage />} />
               

               

              </Routes>

            </section>

          </main>
  )
}

export default Alumno