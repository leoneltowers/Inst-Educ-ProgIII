import { useEffect } from "react";
import { useAdmin } from "../../context/adminContext"
import { CursoCard } from "../../components/cursos/CursoCard";
import { Button, ButtonLink, Card } from "../../components/ui";
import "./styles.css";

export function CursoPage() {
  const { cursos, getCursos } = useAdmin();

  useEffect(() => {
    getCursos();
  }, []);

  return (
    <>
      <div className="container mx-auto px-20 my-5 ">
        <div className="my-4">
          <ButtonLink to={`/addCurso`}>AGREGAR CURSO</ButtonLink>
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
