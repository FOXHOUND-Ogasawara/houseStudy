import { Container } from "@mui/material";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import { Product } from "./types";

function App() {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <Router>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
