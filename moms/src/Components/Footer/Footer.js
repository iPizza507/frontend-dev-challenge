//Dependency
import { Link } from "react-router-dom";
//img
import imgFooter from "../../images/logoFooter.png";
import division from "../../images/Separator.png";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer__context footer__context--margin">
          <img className="footer__context__img" src={imgFooter} alt=""></img>
          <p className="footer__context__p">
            La Mente es Maravillosa is a property of Grupo MContigo© <br />
            2012 – 2020. All rights reserved. <br />
            Los contenidos de esta publicación se redactan solo con fines
            informativos. En ningún momento pueden servir para facilitar
            diagnósticos o sustituir la labor de un profesional. Le recomendamos
            que contacte con su especialista de confianza.
          </p>
        </div>
        <div className="footer__context">
          <img className="footer__division__img" src={division} alt=""></img>
        </div>

        <div className="footer__context">
          <ul className="footer__context__list">
            <li>
              <Link
                className="context__list__Link context__list__Link--color"
                to="/notFound"
              >
                Política de Cookies
              </Link>
            </li>
            <li>
              <Link
                className="context__list__Link context__list__Link--color"
                to="/notFound"
              >
                Política de Privacidad
              </Link>
            </li>
            <li>
              <Link
                className="context__list__Link context__list__Link--color"
                to="/notFound"
              >
                Términos y condiciones de uso
              </Link>
            </li>
            <li>
              <Link
                className="context__list__Link context__list__Link--color"
                to="/notFound"
              >
                Cláusula Informativa de Consentimiento
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
