import React from 'react'
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useAdmin } from "../../../context/adminContext"

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { useAuth } from "../../../context/authContext";
import { useNavigate, useParams } from "react-router-dom";
// import { Link } from 'react-router-dom';


function ListAlumnos() {

    const { calificaciones, getCalificaciones } = useAdmin();
    const { user } = useAuth();




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
        getCalificaciones();
    }, []);


    return (
        <div className="container content-center mx-auto px-20 my-5 ">
            <div className='mx-52 my-5'>
                <h1 className='font-bold'>DETALLES DEL CURSO</h1>
                <br />
                {/* 
                 */}

                <h1 className='text-center font-bold mx-7'>ALUMNOS</h1>

                <div>

                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 700 }} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Nro Legajo</StyledTableCell>
                                    <StyledTableCell align="right">Nombre</StyledTableCell>
                                    <StyledTableCell align="right">Apellido</StyledTableCell>
                                    <StyledTableCell align="right">Nota</StyledTableCell>
                                    <StyledTableCell align="right">Materia</StyledTableCell>
                                    <StyledTableCell align="right">Calificar</StyledTableCell>

                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {calificaciones.map(calificacion => (
                                    <StyledTableRow key={calificacion._id}>
                                        <StyledTableCell component="th" scope="row">
                                            { }
                                        </StyledTableCell>

                                        <StyledTableCell align="right">{calificacion.alumno.firstName}</StyledTableCell>
                                        <StyledTableCell align="right">{calificacion.alumno.lastName}</StyledTableCell>
                                        <StyledTableCell align="right">{calificacion.nota}</StyledTableCell>
                                        <StyledTableCell align="right">{calificacion.materia.nombre}</StyledTableCell>
                                        <StyledTableCell align="right">
                                            <Link to={`/calificar/${calificacion._id}`}>
                                                <Button variant="contained" color="success">
                                                    Calificar
                                                </Button>
                                            </Link>
                                        </StyledTableCell>

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