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
          onClick={() => removeFromCart(1)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={"商品A"} secondary={`価格: $1000`} />
    </ListItem>
  );
};
export default CartItem;
