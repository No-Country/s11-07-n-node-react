import Footer from "./components/Footer/Footer";
import Confirm from "./components/homeCarousel/Confirm";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import LoginForm from "./components/login/LoginForm";
import LoginRegister from "./components/login/LoginRegister";
import Home from "./page/Home";
import SearchPage from "./page/SearchPage";
import IntroCarousel from "./page/IntroCarousel";
import ErrorPage from "./page/ErrorPage";
import Address from "./page/Address";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<IntroCarousel />} />
        {/* <Route path="/intro" element={<IntroCarousel />} /> */}

        <Route path="/home" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/address" element={<Address />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
