
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/layout/Header";
import Footer from "./component/layout/Footer";
import Home from "./component/Home";
import Main from "./component/Main";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Main />} path='Main' />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  );
}

export default App;
