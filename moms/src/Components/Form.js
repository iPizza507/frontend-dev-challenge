//dependency
import Swal from "sweetalert2";
import { useEffect } from "react";
//components
import FAQ from "./FAQ";
export const Form = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = document.getElementById("inputEmail").value;
    //validacion de EMAIL
    if (email === "") {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Los campos no deben estar vacíos!",
        footer: '<a href="">¿Por qué tengo este problema?</a>',
      });
    } else if (!regexEmail.test(email)) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El email es incorrecto!",
        footer: '<a href="">¿Por qué tengo este problema?</a>',
      });
    }

    return Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Un error inesperado!",
      footer: '<a href="">¿Por qué tengo este problema?</a>',
    });
  };

  useEffect(() => {
    addEv();
  }, []);
  function addEv() {
    //search Parent div
    let doc = document.getElementsByClassName("container__FAQ__question");
    //search all childrens.. and adding envent -> delete this.
    for (let i = 0; i < doc.length; i++) {
      console.log(doc[i].children[0].children[0].children[0].className);
      doc[i].children[0].addEventListener("click", () => {
        //this.parentNode.removeChild(this);
        let hijo = doc[i].children[1];

        if (doc[i].children[1].className === "container__FAQ__answer") {
          hijo.setAttribute("class", "container__FAQ__answer--display");
        } else {
          hijo.setAttribute("class", "container__FAQ__answer");
        }
      });
    }
  }

  return (
    <>
      <div>
        <FAQ></FAQ>
        <div className="container__formulario">
          <h1 className="container__formulario__h1">
            ¿Te quedaste con ganas de saber más?
          </h1>
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
      </div>
    </>
  );
};

export default Form;
