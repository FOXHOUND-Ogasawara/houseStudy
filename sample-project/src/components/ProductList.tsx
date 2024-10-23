// src/components/ProductList.tsx

import { Grid } from "@mui/material";
import { Product } from "../types";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[];
  // addToCart: (product: Product) => void;
}

const ProductList = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductItem />
      </Grid>
    </Grid>
  );
};

export default ProductList;
