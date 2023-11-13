import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label } from "../../components/ui";
import { useAlumnos } from "../../context/alumContext";
import { useForm } from "react-hook-form";

export function CursoFormPage() {

  const { createCurso, getCurso, updateCurso }= useAlumnos();
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
        updateCurso(params.id, data);
      } else {
        createCurso(data);
      }
      navigate("/cursos");

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadCurso = async () => {
      if (params.id) {
        const curso = await getCurso(params.id);
        setValue("nombre", curso.nombre);
        setValue("comision", curso.comision);
        setValue("año",curso.comision);
        
      }
    };
    loadCurso();
  }, []);

  return (
    <div className="card-container">
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>

          <Input
            type="text"
            name="nombre"
            placeholder="Nombre de la carrera"
            {...register("nombre")}
            autoFocus
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">Please enter a title.</p>
          )}

          <Input
            type="text"
            name="comision"
            placeholder="Comision"
            {...register("comision")}
            autoFocus
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">Please enter a title.</p>
          )}

          <Input
            type="text"
            name="año"
            placeholder="Año"
            {...register("año")}
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
