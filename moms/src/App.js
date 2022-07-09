//Dependency
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import HeaderNavBar from "./Components/Header/HeaderNavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
import Form from "./Components/Form";
import WantToBeaMother from "./Components/WantToBeaMother";

//Styles
//import "./css/styles.css";
import "./css/styles.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/iWantToBeaMother" element={<WantToBeaMother />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
