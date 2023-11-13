import { useEffect } from "react";
import { useAlumnos } from "../../context/alumContext"
import { CursoCard } from "../../components/cursos/CursoCard";
import { Button, ButtonLink, Card } from "../../components/ui";
import { ImFileEmpty } from "react-icons/im";
import "./styles.css";

export function CursoPage() {
  const { cursos, getCursos } = useAlumnos();

  useEffect(() => {
    getCursos();
  }, []);

  return (
    <>
      <div className="container mx-auto px-20 my-5 ">

        <div className="my-4">
        <ButtonLink to={`/add-Curso`}>AGREGAR CURSO</ButtonLink>
        </div>

        
      
        <div className="grid grid-cols-3 gap-4">
          {
            cursos.map(curso => (
              <CursoCard curso={curso} key={curso._id} />
            ))
          }

        </div >

      </div>

    </>
  );
}
