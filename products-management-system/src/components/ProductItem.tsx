// src/components/ProductItem.tsx

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { Product } from "../types";

interface ProductItemProps {
  product: Product;
  addToCart: (product: Product) => void;
}

const ProductItem = ({ product, addToCart }: ProductItemProps) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={product.image}
        alt={product.title}
        sx={{
          height: 140,
          objectFit: "contain",
          padding: 1,
        }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6">
          {product.title}
        </Typography>
        <Typography variant="body1">価格: ${product.price}</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addToCart(product)}
        >
          カートに追加
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
