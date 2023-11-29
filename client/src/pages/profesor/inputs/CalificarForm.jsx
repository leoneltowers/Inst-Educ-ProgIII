import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label } from "../../../components/ui";
import { useAdmin } from "../../../context/adminContext";
import { useForm } from "react-hook-form";


export function CalificarForm() {

  const { getCalificacion, updateCalificacion } = useAdmin();
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
        updateCalificacion(params.id, data);
      } else {
      }
      navigate("/calificar");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const loadAlumno = async () => {
      if (params.id) {
        const calificacion = await getCalificacion(params.id);
                setValue("nota", calificacion.nota);
          }
    };
    loadAlumno();
  }, []);

  return (
    <div className="card-container">
      <Card>
        <form onSubmit={handleSubmit(onSubmit)}>

          <label className="block text-sm font-medium text-white mb-2">
            Agregue una calificacion (Entre 1-10)

          </label>


          <Input
            type="text"
            name="nota"
            placeholder="Nota"
            {...register("nota")}
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
