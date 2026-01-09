import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/feedback">Feedback</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}
