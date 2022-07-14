//components
import { Link } from "react-router-dom";

export const CardItems = (props) => {
  const { datos } = props;

  return (
    <>
      <div className="card" key={datos.id}>
        <Link to={datos.link}>
          <img className="card__img" src={datos.url} alt="" />
        </Link>

        <div className="card__body">
          <h6 className="card__body__h6">{datos.texTop.toUpperCase()}</h6>
          <h5 className="card__body__h5">{datos.name}</h5>
          <p className="card__body__p">{datos.text.substr(0, 90) + "..."}</p>
        </div>
      </div>
    </>
  );
};

export default CardItems;
