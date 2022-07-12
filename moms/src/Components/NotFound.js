//Dependency
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <div className="container__notFound">
        <h1 className="container__notFound__h1">
          Disculpa, esta página no está disponible todavía!..
        </h1>
        <Link className="container__notFound__a" to="/">
          Volver
        </Link>
      </div>
    </>
  );
};

export default NotFound;
