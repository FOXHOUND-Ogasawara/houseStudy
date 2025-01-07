// src/pages/Home.tsx

import {
  Box,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { Product } from "../types";

interface HomeProps {
  addToCart: (product: Product) => void;
}

const Home = ({ addToCart }: HomeProps) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("商品データの取得に失敗しました:", error);
      })
      .finally(() => {
        setLoading(false);
      });

    fetch("https://fakestoreapi.com/products/categories")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((error) => {
        console.log("カテゴリーの取得に失敗しました:", error);
      });
  }, []);

  const handleCategoryChange = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    setSelectedCategory(event.target.value as string);
    setLoading(true);

    const category = event.target.value as string;
    const url =
      category === "all"
        ? "https://fakestoreapi.com/products"
        : `https://fakestoreapi.com/products/category/${category}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log("商品データの取得に失敗しました:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        商品一覧
      </Typography>
      <FormControl sx={{ minWidth: 200, marginBottom: 2 }}>
        <InputLabel id="category-select-label">カテゴリで絞り込み</InputLabel>
        <Select
          labelId="category-select-label"
          value={selectedCategory}
          label="カテゴリで絞り込み"
          onChange={handleCategoryChange}
        >
          <MenuItem value="all">全て</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ProductList products={products} addToCart={addToCart} />
    </div>
  );
};

export default Home;
