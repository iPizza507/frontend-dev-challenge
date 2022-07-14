//Dependency
import { Link } from "react-router-dom";
//icons
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineArrowRight,
  AiOutlineSearch,
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
  const moveSearch = () => {
    let searchDeployment = document.getElementById("searchDeployment");
    searchDeployment.style.display = "flex";
  };
  const moveSearch2 = () => {
    let searchDeployment = document.getElementById("searchDeployment");
    searchDeployment.style.display = "none";
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
                    to="/imMother"
                  >
                    Voy a ser mamá <AiOutlineArrowRight />
                  </Link>
                </li>
                <li>
                  <Link
                    className="listMenuHambur__link listMenuHambur__link--color"
                    to="/giveBirth"
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
                    to="/learnToBeAMom"
                  >
                    Aprende a ser mamá
                    <AiOutlineArrowRight />
                  </Link>
                </li>
                <li>
                  <Link
                    className="listMenuHambur__link listMenuHambur__link--color"
                    to="/babys"
                  >
                    Educación para bebes
                    <AiOutlineArrowRight />
                  </Link>
                </li>
                <li>
                  <Link
                    className="listMenuHambur__link listMenuHambur__link--color"
                    to="/children"
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
          <Link
            to="#"
            className="container__Search__a"
            onClick={() => moveSearch()}
          >
            <img className="navBar__search__img" src={lupa} alt="una img" />
          </Link>
        </div>
      </nav>

      <div className="container__Search" id="searchDeployment">
        <input
          type="search"
          className="container__Search__input"
          placeholder="Buscar.."
        />
        <Link
          to="#"
          className="container__Search__a"
          onClick={() => moveSearch2()}
        >
          <AiOutlineClose></AiOutlineClose>
        </Link>
        <Link to="#" className="container__Search__a">
          <AiOutlineSearch></AiOutlineSearch>
        </Link>
      </div>
    </>
  );
};

export default HeaderNavBar;
