import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import List from "./List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AddItem from "./AddItem";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/addItem" element={<AddItem />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
