//Dependency
import { BrowserRouter, Routes, Route } from "react-router-dom";
//Components
import HeaderNavBar from "./Components/Header/HeaderNavBar";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home";
//Styles
import "./css/styles.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
