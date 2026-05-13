import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';

export function WishlistCatalog({ products, toggleFavorite }) {
  return (
    <div>
      <h1>Product Catalog</h1>
      <Link to="/wishlist">
        ❤️ My Wishlist ({products.filter(p => p.isFavorite).length})
      </Link>
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
  );
}