//Dependency
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Components
import HeaderNavBar from "./Components/Header/HeaderNavBar";
import Home from "./Components/Home";
import Moms from "./Components/Moms";
//Styles
import "./css/styles.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/moms" element={<Moms />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
