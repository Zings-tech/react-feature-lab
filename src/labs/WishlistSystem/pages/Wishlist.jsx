import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';

export function Wishlist({ products, toggleFavorite }) {
  const wishlistItems = products.filter(product => product.isFavorite);

  if (wishlistItems.length === 0) {
    return (
      <div>
        <h1>My Wishlist</h1>
        <Link to="/wishlist-system">← Back to Product Catalog</Link>
        <p>No wishlist items yet. Go add some! ❤️</p>
      </div>
    );
  }

  return (
    <div>
      <h1>My Wishlist</h1>
      <Link to="/wishlist-system">← Back to Product Catalog</Link>
      <p>Total items: {wishlistItems.length}</p>
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
  );
}