//Dependency
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import HeaderNavBar from "./Components/Header/HeaderNavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
import Form from "./Components/Form";
import WantToBeaMother from "./Components/WantToBeaMother";
import GiveBirth from "./Components/GiveBirth";
import NotFound from "./Components/NotFound";
//Styles
import "./css/styles.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/iWantToBeaMother" element={<WantToBeaMother />}></Route>
          <Route path="/giveBirth" element={<GiveBirth />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/notFound" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
