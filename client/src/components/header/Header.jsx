import "./styles.css";
import Button from "./../button/Button";
import { useLocation } from "react-router-dom";
import { routesHash } from "../../utils/utils-routes";
import { BiUserCircle } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useAuth } from "../../context/authContext";

function Header() {
  const { logout, user, isAuthenticated } = useAuth();

  const location = useLocation();

  const { headerButtons, headerStyle } =
    routesHash.find(({ route }) => location.pathname === route) ??
    routesHash[0];

  const menuItems = [
    { href: '/', title: 'Home' },
    { href: 'Itba', title: 'Somos UTN' },
    { href: 'OfertaAcademica', title: 'Oferta Academica' },
    { href: 'Becas', title: 'Becas' },
    { href: 'Login', title: 'Sign in' },
    { href: 'Register', title: 'Sign up ' },
  ];

  const adminItems = [
    // { href: 'cursos', title: 'Administrar Cursos' },
    // { href: 'alumnos', title: 'Adiministrar Alumnos' },
    // { href: 'docente', title: 'Calificar' },
    // { href: 'perfil', title: 'Perfil' },
  ];

  const alumItems = [
    // { href: '/', title: 'Home' },
    // { href: 'allcursos', title: 'Inscribirse' },
    // { href: 'calificaciones', title: 'Mis Notas' },
    // { href: 'Perfil', title: 'Perfil' },
  ]

  return (
    <nav className="navbar-inicio">
      <nav className="navbar">
        <img
          className="navbar_logo"
          src="https://inspt.cvg.utn.edu.ar/theme/image.php/snap/theme/1691363793/img/logo"
          alt="Logo"
        />
        <ul className="navbar_buttons">
          {isAuthenticated ? (
            <>
              {user.roles[0].name == "admin" && (
                adminItems.map((butt, index) => (
                  <li key={index}>
                    <Button
                      text={butt.title}
                      linkRef={butt.href}
                      customButton={butt.customButton}
                    />
                  </li>
                ))
              )}

              {user.roles[0].name == "alumno" && (
                alumItems.map((butt, index) => (
                  <li key={index}>
                    <Button
                      text={butt.title}
                      linkRef={butt.href}
                      customButton={butt.customButton}
                    />
                  </li>
                ))
              )}
              <li>
                <button className="button-logout" >
                  <Link to="/"
                    onClick={() => { logout() }}
                  >Logout</Link>
                </button>
              </li>
              <li>
                <div className="user_container">
                  <BiUserCircle />
                  <span className="navbar_user">{user.firstName}</span>
                  <span className="navbar_user">{user.lastName}</span>
                </div>
              </li>
            </>
          ) : (
            <>
              {menuItems.map((butt, index) => (
                <li key={index}>
                  <Button
                    text={butt.title}
                    linkRef={butt.href}
                    customButton={butt.customButton}
                  />
                </li>
              ))}
            </>
          )}
        </ul>
      </nav>
    </nav>
  );
}
export default Header;
