import { TableAlumnos } from "../../components/table/Table"

function AllAlumnos() {
  return (
    <div className="docente">
      <div className="alum_content">

        <p class="text-center font-bold text-3xl text-black mb-4">Lista de ALUMNOS</p>

        <div className="grid-cols-7">
          <TableAlumnos />
          <TaskCard task={task} key={task._id} />
        </div>
      </div>
    </div>
  );
}

export default AllAlumnos;
