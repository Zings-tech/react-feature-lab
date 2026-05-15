import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import './Wishlist.css'

export function Wishlist({ products, toggleFavorite }) {
  const wishlistItems = products.filter(product => product.isFavorite);

  if (wishlistItems.length === 0) {
    return (
      <div className="wishlist-container">
        <div className="wishlist-header">
          <h1 className="wishlist-title">My Wishlist</h1>
          <Link to="/wishlist-system" className="back-link">← Back to Product Catalog</Link>
        </div>
        <p className="wishlist-empty">No wishlist items yet. Go add some! ❤️</p>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <div className="wishlist-header">
        <h1 className="wishlist-title">My Wishlist</h1>
        <Link to="/wishlist-system" className="back-link">← Back to Product Catalog</Link>
      </div>
      <p className="wishlist-count">Total items: {wishlistItems.length}</p>
      <div className="wishlist-grid">
        {wishlistItems.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            isFavorite={product.isFavorite}
            toggleFavorite={() => toggleFavorite(product.id)}
          />
        ))}
      </div>
    </div>
  );
}