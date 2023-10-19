import Footer from "./components/Footer/Footer";
import Directions from "./components/Profile/Directions";
import EditProfile from "./components/Profile/editProfile";
import Profile from "./components/Profile/profile";
import { Routes, Route, useNavigate } from "react-router-dom";
import LoginForm from "./components/login/LoginForm";
import LoginRegister from "./components/login/LoginRegister";
import Home from "./page/Home";
import SearchPage from "./page/SearchPage";
import IntroCarousel from "./page/IntroCarousel";
import ErrorPage from "./page/ErrorPage";
import Address from "./page/Address";
import ProfessionalFilter from "./page/ProfessionalFilter";
import { useEffect } from "react";
import { localUser } from "./store/UserSlice";
import { useDispatch } from "react-redux";

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      // VERIFICAR SI ES LA PRIMERA VEZ EN ENTRAR A LA APLICACIÓN
      let introStorage = JSON.parse(localStorage.getItem("introPage"));

      // VERIFICAR SI EL USUARIO ESTÁ LOGGEADO
      let user = JSON.parse(localStorage.getItem("user"));
      if (user) {
        dispatch(localUser(user));
      } else {
        user = null;
      }

      if (!introStorage) {
        navigate("/onboarding");
      } else if (introStorage && !user) {
        navigate("/login");
      } else if (introStorage && user) {
        navigate("/search");
      }
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/onboarding" element={<IntroCarousel />} />
        {/* <Route path="/intro" element={<IntroCarousel />} /> */}

        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}

        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<LoginRegister />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/address" element={<Address />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/professionalfilter" element={<ProfessionalFilter />} />
      </Routes >
    </>
  );
}

export default App;
