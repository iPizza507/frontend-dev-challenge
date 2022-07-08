//img
import myBgImg from "../images/background__hero--kids.png";
import myBgImgBeMom from "../images/background_1.png";
import myBgImgMom from "../images/background_2.png";
import myBgchildren from "../images/background_3.png";
import myQuotes from "../images/comillas.png";
export const Home = () => {
  return (
    <>
      <div className="container">
        <img className="logo__img" src={myBgImg} alt=""></img>
        <div className="container__text">
          <h1 className="text--color container__text__h1">
            Su viaje de <p className="container__text__h1__p">salud</p>
            <p className="container__text__h1__p"> emocional</p> empieza aqui
          </h1>
          <h3 className="text--color container__text__h3">
            Conoce nuestro
            <br /> profesionales con licencia
          </h3>
          <p className="text--color container__text__p">
            Todos se someten a un proceso seguro de <br />
            verificación y acreditación, además de <br />
            adherirse a estrictos códigos de ética y <br />
            confidencialidad
          </p>
        </div>
      </div>
      <div className="container">
        <img className="logo__img" src={myBgImgMom} alt=""></img>
        <div className="container__text--right">
          <h1 className="text--color container__text__h1">
            Educación <p className="container__text__h1__p">para niños</p>. La
            mejor enseñanza.
          </h1>
          <h3 className="text--color container__text__h3">
            Conoce nuestros
            <br /> profesionales con licencia!
          </h3>
        </div>
      </div>
      <div className="container">
        <img className="logo__img" src={myBgImgBeMom} alt=""></img>
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
      <div className="container">
        <img className="logo__img" src={myBgchildren} alt=""></img>
        <div className="container__text--right">
          <h1 className="text--color container__text__h1">
            ¿Parto? No es
            <p className="container__text__h1__p"> ningun problema mamá</p>.
            Relax!.
          </h1>
          <h3 className="text--color container__text__h3">
            Conoce nuestros
            <br /> profesionales con licencia!
          </h3>
        </div>
      </div>
      <div className="container__home_">
        <img src={myQuotes} alt=""></img>
        <p>
          Me gustaría agradecer al sitio, me ayudó de una manera inimaginable,
        </p>
        <p>el psicólogo fue sumamente servicial y acogedor conmigo</p>
        <p>y me siento mejor conmigo mismo</p>
        <h6>- Maria -</h6>
      </div>
    </>
  );
};

export default Home;
