//Dependency
import { Link } from "react-router-dom";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { useState } from "react";
//img
import myLogo from "../../images/Logo.png";
import lupa from "../../images/lupa.png";
export const HeaderNavBar = () => {
  const [icon, setIcon] = useState(AiOutlineMenu);

  //if u click, show them.
  const moveMenu = () => {
    let menuDeployment = document.getElementById("menuDeployment");
    if (menuDeployment.style.display === "none") {
      menuDeployment.style.display = "block";
      setIcon(AiOutlineMenu);
    } else {
      menuDeployment.style.display = "none";
      setIcon(AiOutlineClose);
    }
  };
  const moveSearch = () => {
    let searchDeployment = document.getElementById("searchDeployment");
    if (searchDeployment.style.display === "none") {
      searchDeployment.style.display = "block";
    } else {
      searchDeployment.style.display = "none";
    }
  };
  return (
    <>
      <nav className="navBar">
        <div className="navBar__menuHambur">
          <Link to="#" onClick={moveMenu}>
            {icon}
          </Link>
          <div className="navBar__listMenuHambur" id="menuDeployment">
            <div className="listMenuHambur__division">
              <h3 className="listMenuHambur__title">Embarazo</h3>
              <hr className="listMenuHambur__hr"></hr>
              <ul className="listMenuHambur__list">
                <li>
                  <Link className="listMenuHambur__link" to="/">
                    Quiero ser mamá
                  </Link>
                  <AiOutlineArrowRight />
                </li>
                <li>
                  <Link className="listMenuHambur__link" to="/moms">
                    Voy a ser mamá
                  </Link>
                  <AiOutlineArrowRight />
                </li>
                <li>
                  <Link className="listMenuHambur__link" to="#">
                    Parto
                  </Link>
                  <AiOutlineArrowRight />
                </li>
              </ul>
            </div>
            <div className="listMenuHambur__division">
              <h3 className="listMenuHambur__title">Educación</h3>
              <hr className="listMenuHambur__hr"></hr>
              <ul className="listMenuHambur__list">
                <li>
                  <Link className="listMenuHambur__link" to="#">
                    Aprende a ser mamá
                  </Link>
                  <AiOutlineArrowRight />
                </li>
                <li>
                  <Link className="listMenuHambur__link" to="#">
                    Educación para bebes
                  </Link>
                  <AiOutlineArrowRight />
                </li>
                <li>
                  <Link className="listMenuHambur__link" to="#">
                    Educación para niños
                  </Link>
                  <AiOutlineArrowRight />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navBar__logo">
          <img className="logo__img" src={myLogo} alt="Una imagen central" />
        </div>

        <div className="navBar__search">
          <input type="search" id="searchDeployment" />
          <img src={lupa} alt="una img" onClick={moveSearch} />
        </div>
      </nav>
    </>
  );
};

export default HeaderNavBar;
