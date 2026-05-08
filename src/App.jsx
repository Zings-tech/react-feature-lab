import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { ShoppingCartManager } from "./labs/ShoppingCart/ShoppingCartManager";

function App() {
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart-manager" element={<ShoppingCartManager />} />
      </Routes>
    </Router>
  )
}

export default App;