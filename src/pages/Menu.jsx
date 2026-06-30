// src/pages/Menu/Menu.jsx

import { useNavigate } from "react-router-dom";
import "./Menu.css";

const categories = [
  {
    id: 1,
    name: "Pizza",
    image: "/images/categories/pizza.jpg",
    route: "/menu/pizza",
  },
  {
    id: 2,
    name: "Burger",
    image: "/images/categories/burger.jpg",
    route: "/menu/burger",
  },
  {
    id: 3,
    name: "Coffee",
    image: "/images/categories/coffee.jpg",
    route: "/menu/coffee",
  },
  {
    id: 4,
    name: "Pasta",
    image: "/images/categories/pasta.jpg",
    route: "/menu/pasta",
  },
  {
    id: 5,
    name: "Desserts",
    image: "/images/categories/dessert.jpg",
    route: "/menu/desserts",
  },
  {
    id: 6,
    name: "Shakes",
    image: "/images/categories/shake.jpg",
    route: "/menu/shakes",
  },
  {
    id: 7,
    name: "Mocktails",
    image: "/images/categories/mocktail.jpg",
    route: "/menu/mocktails",
  },
  {
    id: 8,
    name: "Sandwiches",
    image: "/images/categories/sandwich.jpg",
    route: "/menu/sandwiches",
  },
];

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div className="menu-page">
      {/* Hero Section */}
      <section className="menu-hero">
        <h1>Explore Our Menu</h1>
        <p>
          Fresh ingredients, authentic flavors, and dishes crafted with love.
          Choose your favorite category and start ordering.
        </p>
      </section>

      {/* Categories */}
      <section className="menu-categories">
        <h2>Categories</h2>

        <div className="category-grid">
          {categories.map((category) => (
            <div
              key={category.id}
              className="category-card"
              onClick={() => navigate(category.route)}
            >
              <img
                src={category.image}
                alt={category.name}
                className="category-image"
              />

              <div className="category-overlay">
                <h3>{category.name}</h3>
                <button>View Items</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Menu;