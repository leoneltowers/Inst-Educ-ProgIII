// import { useTasks } from "../../context/tasksContext";
import { Button, ButtonLink, Card } from "../ui";
import { useAdmin } from "../../context/adminContext";
import { useNavigate, useParams } from "react-router-dom";
// const params = useParams(); 

export function AlumnoCard({ alumno }) {
  // const { deleteTask } = useTasks();
  const { deleteAlumno } = useAdmin();

 
  return (
    <Card>
      < div className="">
        <h1 className="text-2xl text-center font-bold">{alumno.lastName}</h1>
        <h2 className="text-center">{alumno.firstName}</h2>
        <h2 className="text-center">{alumno.phone}</h2>

        <div className="flex gap-x-2 justify-center items-center my-4">
          <Button onClick={() => deleteAlumno(alumno._id)}>Delete</Button>
          <ButtonLink to={`/alumnos/${alumno._id}`}>Editar</ButtonLink>
          {/* <ButtonLink to={`/alumnos/${alumno._id}`}>Ver Materias</ButtonLink> */}
        </div>

       
      </div>
    </Card>
 


  );
}