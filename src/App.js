import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
        <Routes>
          <div>
            <Route index />
            <Route path="pokemon/:id" />
            <Route path="pokemon/:id/:info" />
          </div>
        </Routes>
    </>
  );
}

export default App;
