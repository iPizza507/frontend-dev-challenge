//components
import myBgImg from "../images/background_1.png";
import ImgiWantToBeaMother from "../images/ImgiWantToBeaMother";

import CardItems from "./CardItems";

export const WantToBeaMother = () => {
  return (
    <>
      <div className="container">
        <img className="logo__img" src={myBgImg} alt=""></img>
        <div className="container__text">
          <h1 className="text--color container__text__h1">
            Quiero ser<p className="container__text__h1__p"> la mejor </p>
            <p className="container__text__h1__p">mamá</p> de mi mejor/es hijo/s
          </h1>
          <h3 className="text--color container__text__h3">
            Conoce nuestros
            <br /> profesionales con licencia!
          </h3>
        </div>
      </div>
      <div className="cards__section">
        {ImgiWantToBeaMother.map((e) => (
          <CardItems datos={e} />
        ))}
      </div>
    </>
  );
};

export default WantToBeaMother;
