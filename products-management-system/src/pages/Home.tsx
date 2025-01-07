import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { Product } from "../types";

interface HomeProps {
  addToCart: (product: Product) => void;
}

const Home: React.FC<HomeProps> = ({ addToCart }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  useEffect(() => {
    // 商品データの取得
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data: Product[]) => {
        setProducts(data);
      })
      .catch((err) => {
        console.error(err);
      });

    // カテゴリデータの取得
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data: string[]) => {
        setCategories(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

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
          onChange={(e) => setSelectedCategory(e.target.value as string)}
        >
          <MenuItem value="all">全て</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category} value={category}>
              {category}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <ProductList products={filteredProducts} addToCart={addToCart} />
    </div>
  );
};

export default Home;
