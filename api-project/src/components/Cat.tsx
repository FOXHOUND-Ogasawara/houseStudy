// src/components/Cat.tsx
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const Cat: React.FC = () => {
  const [catImage, setCatImage] = useState<string>("");
  const URL = "https://api.thecatapi.com/v1/images/search";

  const fetchCatImage = () => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setCatImage(data[0].url))
      .catch((error) =>
        console.error("猫ちゃんの画像取得に失敗しました " + error)
      );
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <Box textAlign="center" mt={5}>
      {catImage && (
        <img
          src={catImage}
          alt="猫ちゃん"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      )}
      <Button
        variant="contained"
        color="primary"
        onClick={fetchCatImage}
        sx={{ mt: 3 }}
      >
        別の猫ちゃんを見る
      </Button>
    </Box>
  );
};

export default Cat;
