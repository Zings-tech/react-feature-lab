import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import { ShoppingCartManager } from "./labs/ShoppingCart/ShoppingCartManager";
import { WishlistCatalog } from './labs/WishlistSystem/pages/WishlistCatalog';
import { Wishlist } from './labs/WishlistSystem/pages/Wishlist';
import { initialProducts } from './labs/WishlistSystem/data/products';

function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem('wishlistProducts');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  function toggleFavorite(id) {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, isFavorite: !product.isFavorite }
        : product
    ));
  }

  useEffect(() => {
    localStorage.setItem('wishlistProducts', JSON.stringify(products));
  }, [products]);

  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart-manager" element={<ShoppingCartManager />} />
        <Route path="/wishlist-system" element={<WishlistCatalog products={products} toggleFavorite={toggleFavorite} />} />
        <Route path="/wishlist" element={<Wishlist products={products} toggleFavorite={toggleFavorite} />} />
      </Routes>
    </Router>
  )
}
export default App;