import { useState } from "react";
import './ShoppingCartManager.css'

const INITIAL_PRODUCTS = [
  { id: 1, name: "Laptop", price: 1000, quantity: 1, isSelected: false },
  { id: 2, name: "Keyboard", price: 50, quantity: 1, isSelected: false },
  { id: 3, name: "Mouse", price: 15, quantity: 1, isSelected: false },
  { id: 4, name: "Cooling Fan", price: 18, quantity: 1, isSelected: false },
  { id: 5, name: "Mouse Pad", price: 4, quantity: 1, isSelected: false },
];

export function ShoppingCartManager() {
  const [items, setItems] = useState(INITIAL_PRODUCTS);

  const selectedItems = items.filter(item => item.isSelected);

  const totalQuantity = selectedItems.reduce((acc, item) => acc + item.quantity, 0);

  const selectedItemNames = selectedItems.map((item, index) => {
    if (selectedItems.length > 1 && index === selectedItems.length - 1) {
      return `and ${item.name}`;
    }
    return item.name;
  }).join(selectedItems.length > 2 ? ", " : " ");

  function removeItem(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isSelected: false,
          quantity: 0,
        };
      }

      return item;
    });

    setItems(updatedItems);
  }

  function toggleSelect(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        if (item.isSelected) {
          return {
            ...item,
            isSelected: false,
            quantity: 0,
          };
        }
        return {
          ...item,
          isSelected: true,
          quantity: 1,
        };
      }

      return item;
    });

    setItems(updatedItems);
  }

  function addQuantity(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id && item.isSelected) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }

      return item;
    });

    setItems(updatedItems);
  }

  function subtractQuantity(id) {
    const updatedItems = items.map((item) => {
      if (item.id === id) {
        if (item.quantity === 1) {
          return {
            ...item,
            quantity: 0,
            isSelected: false,
          };
        }

        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    setItems(updatedItems);
  }

  const subtotal = selectedItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.03;
  const total = subtotal + tax;

  return (
    <div className="container">
      <div className="cart-icon">
        🛒
        <span className="cart-badge">{totalQuantity}</span>
      </div>
      <div className="product-name-summary">
        You Selected: {selectedItemNames || "None"}
      </div>
      <div className="product-container">
        {items.map(item => (
          <div key={item.id} className="product-row">
            <span className="product-name">{item.name}</span>
            <span className="product-price">${item.price}</span>

            {item.isSelected && (
              <div className="product-controls">
                <button onClick={() => subtractQuantity(item.id)}>−</button>

                <span>{item.quantity}</span>

                <button onClick={() => addQuantity(item.id)}>+</button>
              </div>
            )}
            <button
              onClick={() => toggleSelect(item.id)}
              disabled={item.isSelected}>
              {item.isSelected ? "✓ Added" : "Add to Cart"}
            </button>
            <button
              onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="total-price">
        <p>Subtotal: ${subtotal.toFixed(2)}</p>
        <p>Tax (3%): ${tax.toFixed(2)}</p>
        <h3>Total: ${total.toFixed(2)}</h3>
      </div>
    </div>
  );
}