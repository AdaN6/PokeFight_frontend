import { Routes, Route } from "react-router-dom";
import Home from "./components/home.js";

function App() {



  return (
    <>
        <Routes>
            <Route index elemen={<Home />} />
            <Route path="pokemon/:id" />
            <Route path="pokemon/:id/:info" />
        </Routes>
    </>
  );
}

export default App;
