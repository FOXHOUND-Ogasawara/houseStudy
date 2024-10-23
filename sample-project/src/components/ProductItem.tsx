// src/components/ProductItem.tsx

import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Product } from "../types";
// import { Button } from '@mui/material';

interface ProductItemProps {
  product: Product;
  // addToCart: (product: Product) => void;
}

const ProductItem = () => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"}
        alt={"sample"}
        sx={{ height: 140, objectFit: "contain", padding: 1 }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6">
          商品A
        </Typography>
        <Typography variant="body1">価格: $200</Typography>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
