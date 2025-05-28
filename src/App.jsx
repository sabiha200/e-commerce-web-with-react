import { BrowserRouter, Routes, Route } from "react-router";
import { Layout } from "./components/layout";
import { Home } from "./pages/Home";
import { Shop } from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import Contact from "./pages/contact";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<LogIn />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/productdetails/:slug" element={<ProductDetails />} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
