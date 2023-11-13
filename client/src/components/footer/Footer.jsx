import { BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi";
import { FiGithub } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import "./styles.css";

function Footer() {
  const location = useLocation();
  return location.pathname === "/" || location.pathname === "/login" ? (
    <></>
  ) : (
    <footer className="footer">
      <figure className="footer_logo-container">
        <img
          className="logo"
          src="https://inspt.cvg.utn.edu.ar/theme/image.php/snap/theme/1691363793/img/logo"
          alt="Logo"
        />
      </figure>
      <h2>&copy; Leonel Torres</h2>
      <div className="social">
        <a target="_blank" href="https://github.com/leoneltorres17">
          <FiGithub />
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/fredy-leonel-torres-205436252/"
        >
          <BiLogoLinkedin />
        </a>
        <a target="_blank" href="https://www.instagram.com/leoneltorres17/">
          <BiLogoInstagram />
        </a>
      </div>
    </footer>
  );
}
export default Footer;
