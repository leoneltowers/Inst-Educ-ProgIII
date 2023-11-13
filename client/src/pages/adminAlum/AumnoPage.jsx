import { useEffect } from "react";
import { useAlumnos } from "../../context/alumContext"
import { AlumnoCard } from "../../components/cursos/AlumnoCard";
import { Button, ButtonLink, Card } from "../../components/ui";
import "./styles.css";

export function AlumnoPage() {
  const { alumnos, getAlumnos } = useAlumnos();

  useEffect(() => {
    getAlumnos();
  }, []);

  return (
    <>
      <div className="container mx-auto px-20 my-5 ">

        <div className="my-4">
        <ButtonLink to={`/alumnos`}>AGREGAR ALUMNO</ButtonLink>
        </div>      
        <div className="grid grid-cols-3 gap-4">
          {
            alumnos.map(alumno => (
              <AlumnoCard alumno={alumno} key={alumno._id} />
            ))
          }
        </div >
      </div>

    </>
  );
}
