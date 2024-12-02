import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import ProductList from "../components/ProductList";
// import { Product } from '../types';

// interface HomeProps {
//   addToCart: (product: Product) => void;
// }

const Home = () => {
  // TODO: 商品データの取得とstate管理（タスク1）

  // TODO: カテゴリーデータの取得とstate管理（タスク2）
  // TODO: カテゴリーで絞り込んだ際のフィルタリング処理（タスク2）

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        商品一覧
      </Typography>
      {/* TODO: カテゴリー選択用のドロップダウンメニュー（タスク2） */}
      <FormControl sx={{ minWidth: 200, marginBottom: 2 }}>
        <InputLabel id="category-select-label">カテゴリで絞り込み</InputLabel>
        <Select
          labelId="category-select-label"
          value={"all"}
          label="カテゴリで絞り込み"
        >
          <MenuItem value="all">全て</MenuItem>
          <MenuItem value={"カテゴリー1"}>カテゴリー1</MenuItem>
          <MenuItem value={"カテゴリー2"}>カテゴリー2</MenuItem>
          <MenuItem value={"カテゴリー3"}>カテゴリー3</MenuItem>
        </Select>
      </FormControl>
      {/* TODO: 商品リストの表示（タスク1） */}
      <ProductList />
    </div>
  );
};

export default Home;
