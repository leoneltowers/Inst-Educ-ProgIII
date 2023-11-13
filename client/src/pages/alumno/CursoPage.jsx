import { useEffect } from "react";
import { useAlumnos } from "../../context/alumContext"
import { CursoCard } from "../../components/cursos/AddCursoCard";
import "./styles.css";

export function CursosPage() {
  const { cursos, getCursos } = useAlumnos();

  useEffect(() => {
    getCursos();
  }, []);

  return (
    <>
      <div className="container mx-auto px-20 my-5 ">
        <div className="grid grid-cols-3 gap-2">
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
