import './ProductCard.css';

export function ProductCard({ name, price, category, isFavorite, toggleFavorite }) {
  return (
    <div className="product-card">
      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-category">{category}</p>
        <p className="product-price">${price}</p>
      </div>
      <button className={`wishlist-btn ${isFavorite ? 'wishlisted' : ''}`} onClick={toggleFavorite}>
        {isFavorite ? '❤️ Wishlisted' : '🤍 Add to Wishlist'}
      </button>
    </div>
  );
}