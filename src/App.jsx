import "./App.css";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Contact from "./page/Contact";
import Home from "./page/Home";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Menu from "./page/Menu";
import ScrollToTop from "./component/ScrollToTop";

function App() {
  // const images = [
  //   {
  //     id: "1",
  //     img: "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  //     title: "Auntie Anne's Season Menu 1",
  //     name: "리치 티에이드",
  //     description:
  //       "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱 1",
  //   },
  //   {
  //     id: "2",
  //     img: "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  //     title: "Auntie Anne's Season Menu 2",
  //     name: "리치 티에이드",
  //     description:
  //       "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱2",
  //   },

  //   {
  //     id: "3",
  //     img: "https://d33wubrfki0l68.cloudfront.net/594de66469079c21fc54c14db0591305a1198dd6/3f4b1/static/images/wallpapers/bridge-01@2x.png",
  //     title: "Auntie Anne's Season Menu 3",
  //     name: "리치 티에이드",
  //     description:
  //       "#콘 나왔~쵸 프레즐 #콘 나왔~쵸 스틱 #콘 나왔~쵸 크림치즈 스틱3",
  //   },
  // ];

  // slider-item

  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/contact"
          element={<Contact />}
        />
        <Route exact path="/menu" element={<Menu />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
