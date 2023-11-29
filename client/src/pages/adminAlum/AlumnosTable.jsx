import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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


 const AlumnosTable = ({ alumnos}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Materia</StyledTableCell>
            <StyledTableCell align="right">Nota</StyledTableCell>
            <StyledTableCell align="right">Observaciones</StyledTableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
          {alumnos.map((alumnos) => (
            <StyledTableRow key={alumnos._id}>
              <StyledTableCell component="th" scope="row">
                {}
              </StyledTableCell>
              <StyledTableCell align="right">{alumnos.nombre}</StyledTableCell>
              <StyledTableCell align="right">{"Sin observaciones"}</StyledTableCell>
           
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
  );

}
export default AlumnosTable