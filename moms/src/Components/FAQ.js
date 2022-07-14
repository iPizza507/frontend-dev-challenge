//dependency
import { Link } from "react-router-dom";
//icons
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
//components
import FAQQuestions from "./Questions/FAQQuestions";

export const FAQ = () => {
  /**
  const [icon, setIcon] = useState(AiOutlineCaretDown);
  let mysStyles = {
    display: "none",
  };
  let mysStyles2 = {
    display: "block",
  };
  const [sStyles, setsStyles] = useState(mysStyles);
  let doc = document.getElementsByClassName("container__FAQ__question");
  //search all childrens.. and adding envent -> delete this.
  for (let i = 0; i < doc.length; i++) {
    console.log(doc[i].children);
    if (doc[i].children[1].styles !== "none") {
      setIcon(AiOutlineCaretUp);
    } else {
      setIcon(AiOutlineCaretDown);
    }
  }
  for (let i = 0; i < doc.length; i++) {
    console.log(doc[i].children);
    doc[i].children[0].addEventListener("click", () => {
      setsStyles(mysStyles2);
      console.log("easd");
    });
  }
  */

  return (
    <>
      <div className="container__FAQ">
        <div className="container__FAQ_asd">
          <h1 className="container__FAQ_asd__h1">Preguntas Frecuentes:</h1>
          <div className="container__FAQ_body">
            {FAQQuestions.map((e) => (
              <div className="container__FAQ__question" key={e.id}>
                <h2 className="container__FAQ__question__h2">
                  <Link to="#" className="container__FAQ__question__h2__a">
                    {e.question}
                    <AiOutlineCaretDown className="container__FAQ__question__h2__a__icon " />
                    <AiOutlineCaretUp className="container__FAQ__question__h2__a__icon container__FAQ__answer" />
                  </Link>
                </h2>
                <div className="container__FAQ__answer">
                  <h4 className="container__FAQ__answer__h4">{e.answer}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;
