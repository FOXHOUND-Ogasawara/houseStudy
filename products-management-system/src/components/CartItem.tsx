import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { Product } from "../types";

interface CartItemProps {
  item: Product;
  removeFromCart: (productId: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ item, removeFromCart }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => removeFromCart(item.id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item.title} secondary={`価格: $${item.price}`} />
    </ListItem>
  );
};

export default CartItem;
