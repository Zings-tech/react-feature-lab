import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home-container">
      <h1>My Projects</h1>
      <ul className="project-list">
        <li>
          <Link to="/cart-manager">🛒 Shopping Cart Manager</Link>
        </li>
        <li>
          <Link to="/checkout" className="disabled-link">📝 Multi-Step Checkout (Coming Soon)</Link>
        </li>
      </ul>
    </div>
  );
}