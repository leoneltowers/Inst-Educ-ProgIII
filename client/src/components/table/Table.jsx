import * as React from 'react';
import Modal from 'react-modal';
import { useEffect, useState } from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import "./modal.css";





import { useAdmin } from "../../context/adminContext"



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

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function TableAlumnos() {

  const { alumnos, getAlumnos } = useAdmin();



  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Manejar la lógica de envío del formulario aquí
    closeModal(); // Cierra el modal después de enviar
  };

  useEffect(() => {
    getAlumnos();
  }, []);


  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="right">Nombre y apellido</StyledTableCell>
            <StyledTableCell align="right">Accion</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {alumnos.map((alu) => (
            <StyledTableRow>

              <StyledTableCell align="right">{alu.firstName + " " + alu.lastName}</StyledTableCell>
              {/* <StyledTableCell align="right">{8}</StyledTableCell>
              <StyledTableCell align="right">{10}</StyledTableCell>
              <StyledTableCell align="right">{9}</StyledTableCell> */}


              <StyledTableCell align="right">
                <button onClick={openModal} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Calificar curso</button>


              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>


      <Modal
      div
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal con Formulario"
        style={{
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
      >
        <h2>Modal con Formulario</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" />
          </div>
          <div>
            <label>Mensaje:</label>
            <textarea rows="4" />
          </div>
          <button type="submit">Enviar</button>
        </form>
        <button onClick={closeModal}>Cerrar Modal</button>
      </Modal>


      {/* </div> */}

     





    </TableContainer>




  );
}
