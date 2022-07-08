//img
import myBgImg from "../images/background__hero--kids.png";

export const Home = () => {
  return (
    <>
      <div className="container">
        <img className="logo__img" src={myBgImg} alt=""></img>
        <div className="container__text">
          <h1>
            Su viaje de salud <br />
            emocional <br />
            empieza aqui
          </h1>
          <h3>
            Conoce nuestro
            <br /> profesionales con licencia
          </h3>
          <p>
            Todos se someten a un proceso seguro de <br />
            verificación y acreditación, además de <br />
            adherirse a estrictos códigos de ética y <br />
            confidencialidad
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
