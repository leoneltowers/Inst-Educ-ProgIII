import { useState } from "react";
import "./styles.css";
import Form from "../../components/form/Form";

import { useNavigate } from "react-router-dom";
import Button from "../../components/button/Button";

function Docente() {
  return (
    <div className="docente">

      <div className='justify-center px-16'>
        <h1 className='text-center font-bold mx-7 bg-white'>Seccion Administradores</h1>

        <p>Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Soluta dolore debitis fugiat perspiciatis
          hic vel pariatur! Numquam, consequatur voluptatum! Delectus impedit
          pariatur est quidem laborum deleniti saepe et voluptates beatae.</p>

      </div>
    </div>

  );
}

export default Docente;
