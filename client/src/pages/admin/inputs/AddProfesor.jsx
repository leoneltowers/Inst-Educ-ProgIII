import { useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, TextField, Select, MenuItem, InputLabel } from "@mui/material";
import { Header } from "../../../components-ui";
import { Formik } from "formik";

const AddProfesor = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const [formData, setFormData] = useState({});

  const handleFormSubmit = () => {
    alert(JSON.stringify(formData, null, 2));
  };

  return (
    <Box m="20px">
      <Header title="AGREGAR PROFESOR" subtitle="Agregar nuevo profesor" />

      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          handleFormSubmit();
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="email"
                label="Email"
                onChange={handleChange}
                value={values.email}
                name="email"
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Password"
                onChange={handleChange}
                value={values.email}
                name="password"
                sx={{ gridColumn: "span 2" }}
              />

              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="Repeat Password"
                onChange={handleChange}
                value={values.email}
                name="password"
                sx={{ gridColumn: "span 2" }}
              />



              {/* Posiciona el InputLabel encima del Select */}
              <Box gridColumn="span 2" sx={{ position: "relative" }}>
                <InputLabel
                  htmlFor="selectOption"
                  sx={{
                    position: "absolute",
                    top: 5,
                    left: 15,
                    pointerEvents: "none",
                    color: values.selectOption ? "black" : "gray",
                  }}
                >
                  Selecciona un Curso (curso, comision, año)
                </InputLabel>
                <Select
                  fullWidth
                  variant="filled"
                  value={values.selectOption}
                  name="selectOption"
                  onChange={handleChange}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>


              </Box>


              <Box gridColumn="span 2" sx={{ position: "relative" }}>
                <InputLabel
                  htmlFor="selectOption"
                  sx={{
                    position: "absolute",
                    top: 5,
                    left: 15,
                    pointerEvents: "none",
                    color: values.selectOption ? "black" : "gray",
                  }}
                >
                  Selecciona una Materia
                </InputLabel>
                <Select
                  fullWidth
                  variant="filled"
                  value={values.selectOption}
                  name="selectOption"
                  onChange={handleChange}
                >
                  <MenuItem value="option1">Option 1</MenuItem>
                  <MenuItem value="option2">Option 2</MenuItem>
                  <MenuItem value="option3">Option 3</MenuItem>
                </Select>


              </Box>



            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New Profesor
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddProfesor;


// import { useState } from "react";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { Box, Button, TextField, Select, MenuItem } from "@mui/material";
// import { Header } from "../../components";
// import { Formik } from "formik";

// const AddProfesor = () => {
//   const isNonMobile = useMediaQuery("(min-width:600px)");

//   const [formData, setFormData] = useState({});

//   const handleFormSubmit = () => {
//     // Aquí puedes enviar la respuesta al backend usando una función o haciendo una solicitud HTTP.
//     // Ejemplo: enviarDatosAlBackend(formData);
//     alert(JSON.stringify(formData, null, 2)); // Solo para mostrar los datos en un alert, puedes eliminar esto en la versión final.
//   };

//   return (
//     <Box m="20px">
//       <Header title="AGREGAR PROFESOR" subtitle="Agregar nuevo profesor" />

//       <Formik
//         initialValues={formData}
//         onSubmit={(values) => {
//           setFormData(values);
//           handleFormSubmit();
//         }}
//       >
//         {({
//           values,
//           handleSubmit,
//           handleChange,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Box
//               display="grid"
//               gap="30px"
//               gridTemplateColumns="repeat(4, minmax(0, 1fr))"
//               sx={{
//                 "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
//               }}
//             >
//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="First Name"
//                 onChange={handleChange}
//                 value={values.firstName}
//                 name="firstName"
//                 sx={{ gridColumn: "span 2" }}
//               />

//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="text"
//                 label="Last Name"
//                 onChange={handleChange}
//                 value={values.lastName}
//                 name="lastName"
//                 sx={{ gridColumn: "span 2" }}
//               />

//               <TextField
//                 fullWidth
//                 variant="filled"
//                 type="email"
//                 label="Email"
//                 onChange={handleChange}
//                 value={values.email}
//                 name="email"
//                 sx={{ gridColumn: "span 4" }}
//               />

// <Select
//   fullWidth
//   variant="filled"
//   label="Select Option"
//   value={values.selectOption}
//   name="selectOption"
//   onChange={handleChange}
//   sx={{ gridColumn: "span 2" }}
//   InputLabelProps={{
//     shrink: !!values.selectOption, // Encoge el label si hay un valor seleccionado
//   }}
// >
//   <MenuItem value="option1">Option 1</MenuItem>
//   <MenuItem value="option2">Option 2</MenuItem>
//   <MenuItem value="option3">Option 3</MenuItem>
// </Select>


//               <Select
//                 fullWidth
//                 variant="filled"
//                 displayEmpty  // Añade esta propiedad para mostrar el label cuando no hay nada seleccionado
//                 value={values.selectOption}
//                 name="selectOption"
//                 onChange={handleChange}
//                 sx={{ gridColumn: "span 2" }}
//               >
//                 <MenuItem disabled value="">
//                   <em>Select Option</em>
//                 </MenuItem>
//                 <MenuItem value="option1">Option 1</MenuItem>
//                 <MenuItem value="option2">Option 2</MenuItem>
//                 <MenuItem value="option3">Option 3</MenuItem>
//               </Select>

//               <Select
//                 fullWidth
//                 variant="filled"
//                 displayEmpty
//                 label="Select Option" // Usa la misma cadena que el nombre del campo en el estado del formulario
//                 onChange={handleChange}
//                 value={values.selectOption}
//                 name="selectOption"
//                 sx={{ gridColumn: "span 2" }}
//               >
//                 <MenuItem value="option1">Option 1</MenuItem>
//                 <MenuItem value="option2">Option 2</MenuItem>
//                 <MenuItem value="option3">Option 3</MenuItem>
//               </Select>

//             </Box>

//             <Box display="flex" justifyContent="end" mt="20px">
//               <Button type="submit" color="secondary" variant="contained">
//                 Create New User
//               </Button>
//             </Box>
//           </form>
//         )}
//       </Formik>
//     </Box>
//   );
// };

// export default AddProfesor;
