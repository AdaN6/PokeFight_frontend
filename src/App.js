import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Route index />
          <Route path="pokemon/:id" />
          <Route path="pokemon/:id/:info" />
        </div>
      </Router>
    </>
  );
}

export default App;
