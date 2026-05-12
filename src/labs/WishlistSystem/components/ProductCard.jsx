export function ProductCard({ name, price, category, isFavorite, toggleFavorite }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Price: ${price}</p>
      <p>Category: {category}</p>
      <button onClick={toggleFavorite}>
        {isFavorite ? '❤️ Wishlisted' : '🤍 Add to Wishlist'}
      </button>
    </div>
  );
}