export const Form = () => {
  return (
    <>
      <div className="container__formulario">
        <h1>
          ¿Te quedaste con ganas de saber más o simplemente queres aportar algo?
          ¡Déjanos tús comentarios!
        </h1>
        <form action="#" className="container__form">
          <input type="email" placeholder="Inserte tu: correo"></input>

          <select>
            <option selected option="mama">
              Mamá
            </option>
            <option option="papa">Papá</option>
            <option option="niguno">Ninguno</option>
          </select>
          <textarea
            id="message"
            cols="40"
            rows="10"
            required
            placeholder="Message"
          ></textarea>
        </form>
      </div>
    </>
  );
};

export default Form;
