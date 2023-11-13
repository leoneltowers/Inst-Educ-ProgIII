import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Card, Input, Label } from "../../components/ui";
import { useForm } from "react-hook-form";

export function CursoFormPage() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };

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
          {errors.nombre && (
            <p className="text-red-500 text-xs italic">Please enter a name.</p>
          )}

          <Input
            type="text"
            name="comision"
            placeholder="Comision"
            {...register("comision")}
            autoFocus
          />
          {errors.comision && (
            <p className="text-red-500 text-xs italic">Please enter a comision.</p>
          )}

          <Input
            type="text"
            name="año"
            placeholder="Año"
            {...register("año")}
            autoFocus
          />
          {errors.anio && (
            <p className="text-red-500 text-xs italic">Please enter a anio.</p>
          )}
          <Button>Save</Button>
        </form>
      </Card>
    </div>
  );
}
