// src/App.tsx
import { Container, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import { Product } from "./types";

const App = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // const addToCart = () => {
  //   setCartItems([...cartItems]);
  // };

  const removeFromCart = () => {
    setCartItems([...cartItems]);
  };

  return (
    <Router>
      <CssBaseline />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
