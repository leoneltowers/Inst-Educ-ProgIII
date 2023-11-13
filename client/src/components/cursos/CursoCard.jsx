// import { useTasks } from "../../context/tasksContext";
import { Button, ButtonLink, Card } from "../ui";
import { useAlumnos } from "../../context/alumContext";
import { useNavigate, useParams } from "react-router-dom";
// const params = useParams(); 

export function CursoCard({ curso }) {
  // const { deleteTask } = useTasks();
  const { deleteCurso } = useAlumnos();

 
  return (
    <Card>
      < div className="">
        <h1 className="text-2xl text-center font-bold">{curso.nombre}</h1>
        <h2 className="text-center">{curso.comision}</h2>

        {/* <Button onClick={() => addUser(curso._id)}>Asociar Curso</Button> */}

        <div className="flex gap-x-2 justify-center items-center my-4">
          <Button onClick={() => deleteCurso(curso._id)}>Delete</Button>
          <ButtonLink to={`/cursos/${curso._id}`}>Editar</ButtonLink>
        </div>

        {/* <Button onSubmit={handleSubmit(onSubmit)}>Asociar Curso</Button> */}
        {/* <ButtonLink to={`/cursos/${curso._id}`}>Asociar Curso</ButtonLink> */}

      </div>
    </Card>


 
  /* <Card>
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{curso.nombre}</h1>
        <div className="flex gap-x-2 items-center">
          <Button 
           onClick={() => addUser(curso._id)}
          >Delete</Button>
          <ButtonLink 
          to={`/cursos/${curso._id}`}
          >Edit</ButtonLink>
        </div>
      </header>
      <p className="text-slate-300">{curso.comision}</p>
      format date 
      <p>
        {task.date &&
          new Date(task.date).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
      </p>
    </Card>*/




  );
}