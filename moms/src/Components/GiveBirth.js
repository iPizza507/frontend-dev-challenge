import myBgImg from "../images/background_4.png";
import myLogoEs from "../images/logoES.png";
import myBgImg2 from "../images/background_3.png";
export const GiveBirth = () => {
  return (
    <>
      <div className="container">
        <img className="logo__img" src={myBgImg} alt=""></img>
        <div className="container__text">
          <h1 className="text--color container__text__h1">
            ¿Parto?<p className="container__text__h1__p"> Mira lo </p>
            <p className="container__text__h1__p">que te espera </p>mamá!
          </h1>
          <h3 className="text--color container__text__h3">
            Conoce nuestros
            <br /> profesionales con licencia!
          </h3>
        </div>
      </div>
      <div className="container__giveBirth">
        <div className="container__giveBirth__body">
          <img
            className="container__giveBirth__img"
            src={myBgImg2}
            alt=""
          ></img>
          <h1 className="container__giveBirth__h1">
            1. Asignarles tareas sencillas
          </h1>
          <h3 className="container__giveBirth__h3">
            La primera idea o estrategia para ayudar a los niños a ser
            responsables es asignarles tareas sencillas. Para que la situación
            sea más fácil, puede ser conveniente que un adulto también las haga.
            Por ejemplo, ayudar a lavar los platos o hacer la colada con alguno
            de los progenitores es una buena manera de empezar. Será el primer
            paso para que adquieran autonomía: ser sus modelos.{" "}
            <p className="container__giveBirth__h3__p">
              Pueden recoger los platos mientras uno de los progenitores los
              empieza a lavar.
            </p>
            Pueden hacer lo mismo con su propia colada, que separen su ropa
            blanca de la oscura y la lleven hacia los cubos correspondientes. De
            esta forma, progresivamente, los niños pueden comenzar a adquirir
            responsabilidades, lo que se trasladará también al uso de la
            tecnología, hacer los deberes, gestionar mejor su tiempo (trabajos
            para clase, tiempo para los amigos, juegos, etc.).
          </h3>
        </div>
        <div className="container__giveBirth__footer">
          <img
            className="container__giveBirth__footer__img"
            src={myLogoEs}
            alt=""
          ></img>
        </div>
      </div>
    </>
  );
};

export default GiveBirth;
