import Navbar from "./components/events/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import Contact from "./pages/Contact";
import OrderOnline from "./pages/OrderOnline";
import TopBar from "./components/events/Topbar"

function App() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <div className="h-[2px] bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600"></div>

      <div className="pt-30">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/order-online" element={<OrderOnline />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;