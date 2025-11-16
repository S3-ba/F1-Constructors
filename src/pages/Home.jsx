import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Formula 1 – Constructors</h1>

      <Link to="/constructors" className="home-btn">
        Go To Constructors →
      </Link>
    </div>
  );
}