import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import './WishlistCatalog.css';

export function WishlistCatalog({ products, toggleFavorite }) {
  return (
    <div className="catalog-container">
      <div className="catalog-header">
        <h1 className="catalog-title">Product Catalog</h1>
        <div className="catalog-links">
          <p className="wishlist-count">❤️ My Wishlist ({products.filter(p => p.isFavorite).length})</p>
          <Link to="/wishlist" className="wishlist-link">See Wishlist Items</Link>
        </div>
      </div>
      <div className="catalog-grid">
        {products.map(product => (
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