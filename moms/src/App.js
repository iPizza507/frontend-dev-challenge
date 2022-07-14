//Dependency
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import HeaderNavBar from "./Components/Header/HeaderNavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";

//section Components
import WantToBeaMother from "./Components/WantToBeaMother";
import GiveBirth from "./Components/GiveBirth";
import Children from "./Components/Childrens";
import ImAMother from "./Components/ImAMother";
import Form from "./Components/Form";
import LearnToBeAMom from "./Components/LearnToBeAMom";

import FAQ from "./Components/FAQ";

//error Component
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
          <Route path="/imMother" element={<ImAMother />}></Route>
          <Route path="/giveBirth" element={<GiveBirth />}></Route>
          <Route path="/form" element={<Form />}></Route>

          <Route path="/learnToBeAMom" element={<LearnToBeAMom />}></Route>
          <Route path="/babys" element={<Children />}></Route>
          <Route path="/children" element={<NotFound />}></Route>

          <Route path="/faq" element={<FAQ />}></Route>
          <Route path="/notFound" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
