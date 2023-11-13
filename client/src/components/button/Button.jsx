import { Link, NavLink } from "react-router-dom";
import "./styles.css";

const Button = ({
  linkRef,
  text,
  customButton,
  // dependiente que boton sea customisa
  comesFromForm,
  onClickEvent = () => {
    return;
  },
}) => {
  return comesFromForm ? (
    <button className={`button button-${customButton}`} onClick={onClickEvent}>
      {/* className={button button-${customButton}}: Aquí se están aplicando clases CSS al componente <Link> para aplicar estilos específicos. Esta parte de código se encarga de definir las clases CSS que se asignarán al elemento del enlace. Veamos cómo funciona: */}
      {text}
    </button>
  ) : (
    <Link className={`button button-${customButton}`} to={`${linkRef}`}>
      {text}
    </Link>
  );
};

export default Button;
