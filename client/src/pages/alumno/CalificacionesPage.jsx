import React from 'react'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import CalificacionesTable from './CalificacionesTable';
import { useAlumnos } from "../../context/alumContext"
// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useAuth } from "../../context/authContext";

function CalificacionesPage() {

    const { calificaciones, getCalificaciones } = useAlumnos();
    const { user } = useAuth();

    useEffect(() => {
        getCalificaciones();
    }, []);
    const handlePrint = () => {
        window.print();
    };

    return (
        <div className="container content-center mx-auto px-20 my-5 ">
            <div className='mx-52 my-5'>
                <h1 className='font-bold'>Alumno: {user.firstName + " " + user.lastName}</h1>
                <h1 className='font-bold'>Email: {user.email}</h1>
                <h1 className='text-center font-bold mx-7'>Calificaciones</h1>
                <CalificacionesTable calificaciones={calificaciones} />
                       <div className='my-5'>
                    <Button onClick={handlePrint} variant="contained">Generar Boletín</Button>
                </div>
            </div>
        </div>
    )
}

export default CalificacionesPage