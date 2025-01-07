// src/components/CartItem.tsx

import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, ListItem, ListItemText } from "@mui/material";
import { Product } from "../types";

interface CartItemProps {
  item: Product;
  removeFromCart: (productId: number) => void;
}

const CartItem = ({ item, removeFromCart }: CartItemProps) => {
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
      <ListItemText
        primary={`${item.title} x${item.quantity}`}
        secondary={`価格: $${item.price * (item.quantity || 1)}`}
      />
    </ListItem>
  );
};

export default CartItem;
