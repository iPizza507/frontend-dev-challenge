export const Form = () => {
  return (
    <>
      <div className="container__formulario">
        <h1>¿Te quedaste con ganas de saber más?</h1>
        <h2>¡Déjanos tús comentarios!</h2>
        <form action="#" className="container__form">
          <input
            className="container__form__email"
            type="email"
            placeholder="Inserte tu: correo"
          ></input>

          <select className="container__form__select">
            <option selected option="mama">
              Mamá
            </option>
            <option option="papa">Papá</option>
            <option option="niguno">Ninguno</option>
          </select>
          <textarea
            className="container__form__textArea"
            id="message"
            cols="40"
            rows="10"
            required
            placeholder="Message"
          ></textarea>
          <button className="container__form__submit" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
