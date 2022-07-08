//Dependency
import { Link } from "react-router-dom";
//icons
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineArrowRight,
} from "react-icons/ai";
//state
import { useState } from "react";
//img
import myLogo from "../../images/Logo.png";
import lupa from "../../images/lupa-withe.png";

export const HeaderNavBar = () => {
  const [icon, setIcon] = useState(AiOutlineMenu);

  //if u click, show them.
  const moveMenu = () => {
    let menuDeployment = document.getElementById("menuDeployment");
    if (menuDeployment.style.display === "block") {
      menuDeployment.style.display = "none";
      setIcon(AiOutlineMenu);
    } else {
      menuDeployment.style.display = "block";
      setIcon(AiOutlineClose);
    }
  };
  return (
    <>
      <nav className="navBar">
        <div className="navBar__menuHambur">
          <Link to="#" onClick={() => moveMenu()}>
            {icon}
          </Link>
          <div className="navBar__listMenuHambur" id="menuDeployment">
            <div className="listMenuHambur__division">
              <h3 className="listMenuHambur__title">Embarazo</h3>
              <hr className="listMenuHambur__hr"></hr>
              <ul className="listMenuHambur__list ">
                <li>
                  <Link
                    className="listMenuHambur__link listMenuHambur__link--color"
                    to="/iWantToBeaMother"
                  >
                    Quiero ser mamá <AiOutlineArrowRight />
                  </Link>
                </li>
                <li>
                  <Link
                    className="listMenuHambur__link listMenuHambur__link--color"
                    to="#"
                  >
                    Voy a ser mamá <AiOutlineArrowRight />
                  </Link>
                </li>
                <li>
                  <Link
                    className="listMenuHambur__link listMenuHambur__link--color"
                    to="#"
                  >
                    Parto <AiOutlineArrowRight />
                  </Link>
                </li>
                <li>
                  <Link
                    className="listMenuHambur__link listMenuHambur__link--color"
                    to="/form"
                  >
                    Consultas
                    <AiOutlineArrowRight />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="listMenuHambur__division">
              <h3 className="listMenuHambur__title">Educación</h3>
              <hr className="listMenuHambur__hr"></hr>
              <ul className="listMenuHambur__list listMenuHambur__link--color">
                <li>
                  <Link
                    className="listMenuHambur__link listMenuHambur__link--color"
                    to="#"
                  >
                    Aprende a ser mamá
                    <AiOutlineArrowRight />
                  </Link>
                </li>
                <li>
                  <Link
                    className="listMenuHambur__link listMenuHambur__link--color"
                    to="#"
                  >
                    Educación para bebes
                    <AiOutlineArrowRight />
                  </Link>
                </li>
                <li>
                  <Link
                    className="listMenuHambur__link listMenuHambur__link--color"
                    to="/form"
                  >
                    Educación para niños
                    <AiOutlineArrowRight />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navBar__logo">
          <Link to="/">
            <img className="logo__img" src={myLogo} alt="Una imagen central" />
          </Link>
        </div>

        <div className="navBar__search">
          <input type="search" id="searchDeployment" placeholder="Buscar.." />
          <button type="submit" className="navBar__search__submit">
            <img className="navBar__search__img" src={lupa} alt="una img" />
          </button>
        </div>
      </nav>
    </>
  );
};

export default HeaderNavBar;
