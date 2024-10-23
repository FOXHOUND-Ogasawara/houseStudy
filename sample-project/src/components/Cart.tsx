// src/components/Cart.tsx

import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Product } from "../types";
// import CartItem from './CartItem';

interface CartProps {
  cartItems: Product[];
  removeFromCart: (productId: number) => void;
}

const Cart = ({ cartItems, removeFromCart }: CartProps) => {
  const totalPrice = 0;

  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => setOpen(true)}
        sx={{ position: "fixed", top: 16, right: 16, zIndex: 1300 }}
      >
        カート ({cartItems.length})
      </Button>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <div style={{ width: 300, padding: "16px" }}>
          <IconButton onClick={() => setOpen(false)} sx={{ float: "right" }}>
            <CloseIcon />
          </IconButton>
          <Typography variant="h5" gutterBottom>
            カート
          </Typography>
          <Divider />
          {cartItems.length === 0 ? (
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              カートに商品がありません。
            </Typography>
          ) : (
            <>
              <List>
                {/* TODO: CartItemを表示 */}
                {/* <CartItem item={} removeFromCart={removeFromCart} /> */}
              </List>
              <Divider />
              <Typography variant="h6" sx={{ marginTop: 2 }}>
                合計金額: ${totalPrice.toFixed(2)}
              </Typography>
            </>
          )}
        </div>
      </Drawer>
    </>
  );
};

export default Cart;
