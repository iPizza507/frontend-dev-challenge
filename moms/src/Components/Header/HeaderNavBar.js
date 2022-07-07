//Dependency
import { Link } from "react-router-dom";

export const HeaderNavBar = () => {
  const moveCart = () => {
    console.log("funciona");
    let menuDeployment = document.getElementById("menuDeployment");
    if (menuDeployment.style.display === "none") {
      menuDeployment.style.display = "block";
    } else {
      menuDeployment.style.display = "none";
    }
  };
  return (
    <>
      <nav>
        <Link to="#" onClick={moveCart}>
          Menu hamburguesa
        </Link>
        <ul id="menuDeployment">
          <Link className="itemHover" to="/">
            Home
          </Link>
          <Link className="itemHover" to="/moms">
            Moms
          </Link>
          <li>item2</li>
          <li>item3</li>
        </ul>
        <h1>Lupa</h1>
      </nav>
    </>
  );
};

export default HeaderNavBar;
