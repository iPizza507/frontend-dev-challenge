//components
import myBgImg from "../images/background_1.png";
import ImgforCard from "../images/ImgForCard";

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
      <div className="cards__toBeMother">
        {ImgforCard.map((e) => (
          <div className="card" key={e.id}>
            <img className="card__img" src={e.url} alt="" />
            <div className="card__body">
              <h6 className="card__body__h6">{e.texTop}</h6>
              <h5 className="card__body__h5">{e.name}</h5>
              <p className="card__body__p">{e.text}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WantToBeaMother;
