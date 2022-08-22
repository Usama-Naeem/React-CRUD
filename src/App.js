import "./App.css";
import AddUser from "./components/AddUser";
import AllUser from "./components/AllUser";
import CrudApp from "./components/CrudApp";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<CrudApp />} />
          <Route path="/all" element={<AllUser />} />
          <Route path="/add" element={<AddUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
