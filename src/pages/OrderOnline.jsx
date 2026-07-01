// src/pages/OrderOnline/OrderOnline.jsx

import { useState } from "react";
import "./OrderOnline.css";

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 299,
    image: "/images/menu/pizza1.jpg",
  },
  {
    id: 2,
    name: "Veg Burger",
    category: "Burger",
    price: 199,
    image: "/images/menu/burger1.jpg",
  },
  {
    id: 3,
    name: "Cold Coffee",
    category: "Beverages",
    price: 149,
    image: "/images/menu/coffee1.jpg",
  },
  {
    id: 4,
    name: "White Sauce Pasta",
    category: "Pasta",
    price: 249,
    image: "/images/menu/pasta1.jpg",
  },
  {
    id: 5,
    name: "Chocolate Shake",
    category: "Shakes",
    price: 179,
    image: "/images/menu/shake1.jpg",
  },
  {
    id: 6,
    name: "French Fries",
    category: "Snacks",
    price: 129,
    image: "/images/menu/fries.jpg",
  },
];

const categories = [
  "All",
  "Pizza",
  "Burger",
  "Pasta",
  "Beverages",
  "Shakes",
  "Snacks",
];

const OrderOnline = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === selectedCategory
        );

  const addToCart = (item) => {
    console.log("Added:", item);
    alert(`${item.name} added to cart!`);
  };

  return (
    <div className="order-page">

      {/* Hero */}

      <section className="order-hero">
        <h1>Order Online</h1>
        <p>
          Freshly prepared meals delivered to your doorstep.
        </p>
      </section>

      {/* Categories */}

      <section className="category-section">

        <div className="category-buttons">

          {categories.map((category) => (
            <button
              key={category}
              className={
                selectedCategory === category
                  ? "active-category"
                  : ""
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}

        </div>

      </section>

      {/* Menu */}

      <section className="food-grid">

        {filteredItems.map((item) => (

          <div className="food-card" key={item.id}>

            <img src={item.image} alt={item.name} />

            <div className="food-info">

              <h3>{item.name}</h3>

              <p>{item.category}</p>

              <h4>₹{item.price}</h4>

              <button
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </section>

    </div>
  );
};

export default OrderOnline;