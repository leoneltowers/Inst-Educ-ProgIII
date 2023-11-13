// import { useTasks } from "../../context/tasksContext";
import { Button, ButtonNext, ButtonLink, Card } from "../ui";
import { useAlumnos } from "../../context/alumContext";
import { useNavigate, useParams } from "react-router-dom";

export function CursoCard({ curso }) {
  const { addUser } = useAlumnos();

  //para enviar la dataaa
  const onSubmit = async (data) => {
    try {
      if (params.id) {
        addUser(params.id)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      < div className="">
        <h1 className="text-2xl text-center font-bold">{curso.nombre}</h1>
        <h2 className="text-center">{curso.comision}</h2>
        <div className="flex gap-x-2 justify-center items-center my-4">
          <ButtonNext onClick={() => addUser(curso._id)}>Asociar Curso</ButtonNext>
        </div>
      </div>
    </Card>

  );
}