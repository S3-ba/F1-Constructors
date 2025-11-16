import Balatro from "./Balatro";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ConstructorsPage from "./pages/ConstructorsPage";
import ConstructorDetails from "./pages/ConstructorDetails";

export default function App() {
  return (
    <div className="app-container">
      <Balatro isRotate={false} mouseInteraction={false} pixelFilter={10000} />
      <div className="app-content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/constructors" element={<ConstructorsPage />} />
            <Route path="/constructors/:id" element={<ConstructorDetails />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}
