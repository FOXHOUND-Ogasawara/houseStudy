// src/App.tsx
import { Container, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Home from "./pages/Home";
import { Product } from "./types";

const App = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCartItems((prevCartItems) => {
      const existingItem = prevCartItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      } else {
        return [...prevCartItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== productId)
    );
  };

  return (
    <Router>
      <CssBaseline />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Container sx={{ marginTop: 4 }}>
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
