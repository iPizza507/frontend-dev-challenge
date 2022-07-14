//img
import myBgImg from "../images/background_4.png";

export const LearnToBeAMom = () => {
  return (
    <>
      <div className="container">
        <img className="logo__img" src={myBgImg} alt=""></img>
        <div className="container__text">
          <h1 className="text--color container__text__h1">
            Ser<p className="container__text__h1__p"> mamá </p>
            también se <p className="container__text__h1__p"> Aprende!</p>
          </h1>
          <h3 className="text--color container__text__h3">
            Conoce nuestros
            <br /> profesionales con licencia!
          </h3>
        </div>
      </div>
      <div className="container__learnToBeAMom"></div>
    </>
  );
};

export default LearnToBeAMom;
