//img
import myBgImg from "../images/background_4.png";
import ImgImAMother from "../images/ImgImAMother";
import CardItems from "./CardItems";
export const ImAMother = () => {
  return (
    <>
      <div className="container">
        <img className="logo__img" src={myBgImg} alt=""></img>
        <div className="container__text">
          <h1 className="text--color container__text__h1">
            Vas a ser<p className="container__text__h1__p"> mamá, </p>te sientes
            un poco ilusionada, feliz pero a la vez
            <p className="container__text__h1__p"> llena de dudas. </p>
          </h1>
          <h3 className="text--color container__text__h3">
            Conoce nuestros
            <br /> profesionales con licencia!
          </h3>
        </div>
      </div>
      <div className="cards__section">
        {ImgImAMother.map((e) => (
          <CardItems datos={e} />
        ))}
      </div>
    </>
  );
};

export default ImAMother;
