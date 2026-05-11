import { useState } from "react";
import { initialProducts } from '../data/products';

function ProductCatalog () {
  const [products, setProducts] = useState(initialProducts);

  return (
    <div>
      <h1>Product Catalog</h1>
      <p>Total products: {products.length}</p>
    </div>
  );
}

export default ProductCatalog;