import { Routes, Route } from "react-router-dom";
import Home from "./page/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<div>Prueba</div>} />
        <Route
          path="/*"
          element={
            <p className="font-bold text-[#000] justify-center flex">
              Página no encontrada
            </p>
          }
        />
      </Routes>
    </>
  );
}

export default App;
