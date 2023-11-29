import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Button, TextField } from "@mui/material";
import { Header } from "../../../components-ui";
import { Formik, Field } from "formik";
import { useAdmin } from "../../../context/adminContext";
import { addCursoForm } from "../../../constants/addCursoForm";

const AddCurso = () => {
  const { createCurso } = useAdmin();
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values, onSubmitProps) => {
    try {
      createCurso(values);
      onSubmitProps.resetForm(); // Esto restablece el formulario a los valores iniciales
      console.log(values);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box m="20px">
      <Header title="AGREGAR CURSO" subtitle="Agregar nuevo curso" />

      <Formik
        initialValues={{
          // Initialize the values according to your logic
        }}
        onSubmit={(values, onSubmitProps) => {
          handleFormSubmit(values, onSubmitProps);
        }}
      >
        {({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              {addCursoForm.map(({ label, name, type }) => (
                <Field
                  key={name}
                  name={name}
                  type={type}
                  as={TextField}
                  fullWidth
                  variant="filled"
                  label={label}
                  sx={
                    name === "firstName" || name === "lastName"
                      ? { gridColumn: "span 2" }
                      : { gridColumn: "span 4" }
                  }
                />
              ))}
            </Box>

            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Crear nuevo curso
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default AddCurso;
