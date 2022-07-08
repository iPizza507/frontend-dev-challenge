export const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = document.getElementById("inputEmail").value;
    //validacion de EMAIL
    if (email === "") {
      alert("El campo está vacío");
    } else if (!regexEmail.test(email)) {
      alert("El campo es erroneo");
    }

    return alert("Enviado!");
  };
  return (
    <>
      <div className="container__formulario">
        <h1>¿Te quedaste con ganas de saber más?</h1>
        <h2>¡Déjanos tús comentarios!</h2>
        <form
          action="POST"
          className="container__form"
          onSubmit={submitHandler}
        >
          <input
            id="inputEmail"
            className="container__form__email"
            type="email"
            placeholder="Inserte tu: correo"
            required
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
