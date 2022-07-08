import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <>
      <div>
        <h1>Img</h1>
        <p>Texto al lado</p>
        <h3>Barrita//////////////</h3>
        <div>
          <ul>
            <li>
              <Link to="#">Política de Cookies</Link>
            </li>
            <li>
              <Link to="#">Política de Privacidad</Link>
            </li>
            <li>
              <Link to="#">Términos y condiciones de uso</Link>
            </li>
            <li>
              <Link to="#">Cláusula Informativa de Consentimiento</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
