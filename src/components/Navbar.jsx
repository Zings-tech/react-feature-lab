import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">React Feature Lab 🧪</Link>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
      </ul>
    </nav>
  );
}