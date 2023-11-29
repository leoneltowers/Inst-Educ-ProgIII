import { useEffect } from "react";
import { useAdmin } from "../../context/adminContext"
import { AlumnoCard } from "../../components/cursos/AlumnoCard";
import { Button, ButtonLink, Card } from "../../components/ui";
import "./styles.css";

export function ProfesorPage() {
  const { profesores, getProfesores } = useAdmin();

  useEffect(() => {
    getProfesores();
  }, []);

  return (
    <>
      <div className="container mx-auto px-20 my-5 ">

        <div className="my-4">
        {/* <ButtonLink to={`/add-profesor`}>AGREGAR PROFESOR</ButtonLink> */}
        </div>      
        <div className="grid grid-cols-3 gap-4">
          {
            profesores.map(alumno => (
              <AlumnoCard alumno={alumno} key={alumno._id} />
            ))
          }
        </div >
      </div>

    </>
  );
}
