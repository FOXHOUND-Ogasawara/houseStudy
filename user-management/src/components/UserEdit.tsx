import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface User {
  id: number;
  name: string;
  age: number;
}

const url = "https://d1xfsyprm0n1ea.cloudfront.net/rest/v1/sample_users";
const apikey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTcyNjgyMDU2MiwiZXhwIjoyMDQyMzk2NTYyLCJpc3MiOiJzdXBhYmFzZSJ9.L5PXfGxR4Y1mO24c-9YszX5YJAUEHucpZdkS3qHAwaY";

const UserEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");

  const fetchUser = () => {
    fetch(url + `?id=eq.${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apikey: apikey,
        Prefer: "return=representation",
      },
    })
      .then((response) => response.json())
      .then((data: User[]) => {
        console.log(data);
        if (data.length > 0) {
          setUser(data[0]);
          setName(data[0].name);
          setAge(data[0].age);
        } else {
          console.log("ユーザーが見つかりません");
        }
      })
      .catch((error) => console.error(error));
  };

  const updateUser = () => {
    if (name && age && user) {
      fetch(url + `?id=eq.${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          apikey: apikey,
          Prefer: "return=representation",
        },
        body: JSON.stringify({
          name: name,
          age: age,
        }),
      })
        .then(() => navigate("/"))
        .catch((error) => console.error("更新できませんでした", error));
    }
  };

  const deleteUser = () => {
    if (user) {
      fetch(url + `?id=eq.${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          apikey: apikey,
          Prefer: "return=representation",
        },
        body: JSON.stringify({ deleted: true }),
      })
        .then(() => navigate("/"))
        .catch((error) => console.error("削除に失敗しました", error));
    }
  };

  useEffect(() => {
    fetchUser();
  }, [id]);

  if (!user) {
    return <Typography>読み込み中...</Typography>;
  }

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        ユーザーの編集
      </Typography>
      <Box display="flex" mb={4}>
        <TextField
          label="名前"
          value={name}
          onChange={(e) => setName(e.target.value)}
          sx={{ mr: 2 }}
        />
        <TextField
          label="年齢"
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" color="primary" onClick={updateUser}>
          更新
        </Button>
      </Box>
      <Button variant="outlined" color="secondary" onClick={deleteUser}>
        削除
      </Button>
      <Typography>
        {id}, {name}, {age}
      </Typography>
    </Box>
  );
};

export default UserEdit;
