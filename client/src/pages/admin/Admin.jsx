import React from 'react'
import { InputForm, AddCurso, AddProfesor, Dashboard, SidebarMenu, Topbar } from './index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CursoPage } from "../adminAlum/CursoPage";
import { CursoFormPage } from "../adminAlum/CursoFormPage";
import ListAlumnos from "../adminAlum/ListAlumnos";
import { AlumnoPage } from "../adminAlum/AumnoPage";
import { ProfesorPage } from "../adminAlum/ProfesorPage";
import { AlumnoFormPage } from "../adminAlum/AumnoFormPage";
import './../../styles/index.css';

function Admin() {
  return (
    <main className="app">

      <SidebarMenu />

      <section className="content">
        <Topbar />
        <Routes>
          <Route path="/admin-home" element={<Dashboard />} />
          <Route path="/cursos" element={<CursoPage />} />
          <Route path="/addCurso" element={<CursoFormPage />} />
          <Route path="/cursos/:id" element={<CursoFormPage />} />

          <Route path="/alumnos" element={<AlumnoPage />} />
          <Route path="/alumnos/:id" element={<AlumnoFormPage />} />
          <Route path="/profesores" element={<ProfesorPage />} />
          <Route path="/cursosAlum/:id" element={<ListAlumnos />} />


        </Routes>
      </section>
    </main>
  )
}

export default Admin