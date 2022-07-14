//img
import myBgImg from "../images/background_2.png";
import myBgImg1 from "../images/background_3.png";
import myBgImg2 from "../images/background_4.png";

export const Children = () => {
  return (
    <>
      <div className="container__children">
        <ul className="container__children__slider">
          <li id="slide1" className="container__children__slider__li">
            <img
              className="container__children__slider__img"
              src={myBgImg}
              alt=""
            ></img>
          </li>
          <li id="slide2" className="container__children__slider__li">
            <img
              className="container__children__slider__img"
              src={myBgImg1}
              alt=""
            ></img>
          </li>
          <li id="slide3" className="container__children__slider__li">
            <img
              className="container__children__slider__img"
              src={myBgImg2}
              alt=""
            ></img>
          </li>
        </ul>
        <ul className="container__children__slider__menu">
          <li className="container__children__slider__menu__li">
            <a href="#slide1">1</a>
          </li>
          <li className="container__children__slider__menu__li">
            <a href="#slide2">2</a>
          </li>
          <li className="container__children__slider__menu__li">
            <a href="#slide3">3</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Children;
