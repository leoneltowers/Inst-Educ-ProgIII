import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label } from "../../components/ui";
import { useAlumnos } from "../../context/alumContext";
import { useForm } from "react-hook-form";

export function AlumnoFormPage() {

  const { getAlumno, updateAlumno }= useAlumnos();
  const navigate = useNavigate();
  const params = useParams();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      if (params.id) {
        updateAlumno(params.id, data);
      } else {
      }
      navigate("/alumnos");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadAlumno = async () => {
      if (params.id) {
        const alumno = await getCurso(params.id);
        setValue("firstName", alumno.firstName);
        setValue("lastName", alumno.lastName);
        setValue("phone",alumno.phone);
      }
    };
    loadAlumno();
  }, []);

  return (
    <div className="card-container">
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Input
            type="text"
            name="firstName"
            placeholder="Nombre"
            {...register("firstName")}
            autoFocus
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">Please enter a title.</p>
          )}

          <Input
            type="text"
            name="lastName"
            placeholder="Apellido"
            {...register("lastName")}
            autoFocus
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">Please enter a title.</p>
          )}

          <Input
            type="text"
            name="phone"
            placeholder="Telefono"
            {...register("phone")}
            autoFocus
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">Please enter a title.</p>
          )}
          <Button>Save</Button>
        </form>
      </Card>
    </div>
  );
}
