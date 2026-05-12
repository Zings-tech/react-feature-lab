import { useState } from "react";
import { initialProducts } from '../data/products';
import { ProductCard } from '../components/ProductCard';

export function WishlistCatalog () {
  const [products, setProducts] = useState(initialProducts);

  function toggleFavorite(id) {
    setProducts(products.map(product =>
      product.id === id
        ? { ...product, isFavorite: !product.isFavorite }
        : product
    ));
  }

  return (
    <div>
      <h1>Product Catalog</h1>
      <p>Favorited: {products.filter(p => p.isFavorite).length}</p>
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