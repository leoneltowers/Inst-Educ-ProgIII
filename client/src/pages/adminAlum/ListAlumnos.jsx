import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AlumnosTable from './AlumnosTable';
import { useAdmin } from "../../context/adminContext"
// import * as React from 'react';
// import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAuth } from "../../context/authContext";
import { useNavigate, useParams } from "react-router-dom";

function ListAlumnos() {

    const { calificaciones, getCalificaciones, cursosAlum, getCurso } = useAdmin();
    const { user } = useAuth();
    const { id } = useParams();

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));



    useEffect(() => {
        getCurso(id);
    }, []);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
    //             await getCursoAlum(id);
    //         } catch (error) {
    //             console.error('Error fetching curso data', error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, [getCursoAlum, id]);

    //   console.log(cursosAlum);
    return (
        <div className="container content-center mx-auto px-20 my-5 ">
            <div className='mx-52 my-5'>
                <h1 className='font-bold'>DETALLES DEL CURSO</h1>
                <br />
                <h1 className='font-bold'>Materia: {cursosAlum.nombre}</h1>
                <h1 className='font-bold'>Comisión:{cursosAlum.comisión}</h1>
                <h1 className='font-bold'>Año:{cursosAlum.año}</h1>

                <h1 className='text-center font-bold mx-7'>ALUMNOS</h1>
                {/* {cursosAlum.alumnos && cursosAlum.alumnos.map(alumno => (
                    <h1 key={alumno._id} className='font-bold'>{alumno.firstName} {alumno.lastName}</h1>
                ))}
                <h1 className='font-bold'>Email: {user.email}</h1>
                {/* <AlumnosTable alumnos={alumnos} /> */}


                <div>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Nro Legajo</StyledTableCell>
                                    <StyledTableCell align="right">Nombre</StyledTableCell>
                                    <StyledTableCell align="right">Apellido</StyledTableCell>
                                    <StyledTableCell align="right">Telefono</StyledTableCell>
                                    <StyledTableCell align="right">Email</StyledTableCell>
                                    <StyledTableCell align="right">Observaciones</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {cursosAlum.alumnos && cursosAlum.alumnos.map(alumno => (
                                    <StyledTableRow key={alumno._id}>
                                        <StyledTableCell component="th" scope="row">
                                            { }
                                        </StyledTableCell>

                                        <StyledTableCell align="right">{alumno.firstName}</StyledTableCell>
                                        <StyledTableCell align="right">{alumno.lastName}</StyledTableCell>
                                        <StyledTableCell align="right">{alumno.phone}</StyledTableCell>
                                        <StyledTableCell align="right">{alumno.email}</StyledTableCell>
                                        <StyledTableCell align="right">{"Sin observaciones"}</StyledTableCell>

                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>



                <div className='my-5'>
                    {/* <Button onClick={handlePrint} variant="contained">Generar Boletín</Button> */}
                </div>

                {/* <MateriasTable materias={tuRespuestaDelBackend.materias} /> */}
            </div>
        </div>
    )
}

export default ListAlumnos