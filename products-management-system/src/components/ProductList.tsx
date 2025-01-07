import { Grid } from "@mui/material";
import React from "react";
import { Product } from "../types";
import ProductItem from "./ProductItem";

interface ProductListProps {
  products: Product[];
  addToCart: (product: Product) => void;
}

const ProductList: React.FC<ProductListProps> = ({ products, addToCart }) => {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
          <ProductItem product={product} addToCart={addToCart} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
