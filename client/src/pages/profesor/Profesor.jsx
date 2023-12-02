import React from 'react'
import { InputForm, Dashboard,  SidebarMenu,  Topbar } from './index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, ThemeProvider } from '@mui/material'; // reset all default css
import { ColorModeContext, useMode } from '../../styles/theme';
import { CursoPage } from "../adminAlum/CursoPage";
import ListAlumnos  from "./inputs/ListAlumnos";
import {CalificarForm}  from "./inputs/CalificarForm";
import { AlumnoPage } from "../adminAlum/AumnoPage";
import './../../styles/index.css';

function Admin() {
  return (
    <main className="app">

            <SidebarMenu />

            <section className="content">
              <Topbar />

              <Routes>
                <Route path="/profesor-home" element={<Dashboard />} />

                <Route path="/calificar" element={<ListAlumnos />} />
                <Route path="/calificar/:id" element={<CalificarForm />} />

        

                <Route path="/form" element={<InputForm />} />

               
                <Route path="/cursos" element={<CursoPage/>} />
                

                <Route path="/alumnos" element={<AlumnoPage/>} />
                
                <Route path="/cursosAlum/:id" element={<ListAlumnos />} />
              </Routes>

            </section>

          </main>
  )
}

export default Admin