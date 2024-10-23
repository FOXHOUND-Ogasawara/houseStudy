import {
  Box,
  Button,
  Checkbox,
  Grid,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface User {
  id: number;
  name: string;
  age: number;
  deleted?: boolean;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [deleted, setDeleted] = useState<boolean>(false);
  const [sorted, setSorted] = useState<string>("asc");

  const defaultUrl =
    "https://d1xfsyprm0n1ea.cloudfront.net/rest/v1/sample_users";
  const [url, setUrl] = useState<string>(
    defaultUrl + `?deleted=eq.false&order=id.asc`
  );
  const apikey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTcyNjgyMDU2MiwiZXhwIjoyMDQyMzk2NTYyLCJpc3MiOiJzdXBhYmFzZSJ9.L5PXfGxR4Y1mO24c-9YszX5YJAUEHucpZdkS3qHAwaY";

  const fetchUsers = () => {
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        apikey: apikey,
        Prefer: "return=representation",
      },
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  };

  function buildUrl(): string {
    let retUrl: string = "";
    let secDeleted = "";
    let secSorted = "";
    console.log(deleted, sorted);

    // default
    if (!deleted && sorted === "asc") {
      retUrl = defaultUrl + `?deleted=eq.false&order=id.asc`;

      return retUrl;
    }

    // isDeleted
    if (!deleted) {
      secDeleted = "deleted=eq.false";
    }

    //isSorted
    if (sorted === "asc") {
      secSorted = "order=id.asc";
    } else {
      secSorted = "order=id.desc";
    }

    // build
    if (secDeleted != "" && secSorted != "") {
      retUrl = defaultUrl + "?" + secDeleted + "&" + secSorted;
    } else if (secDeleted != "") {
      retUrl = defaultUrl + "?" + secDeleted;
    } else if (secSorted != "") {
      retUrl = defaultUrl + "?" + secSorted;
    }

    return retUrl;
  }

  const handleDeleted = () => {
    setDeleted(deleted ? false : true);
  };

  const sortChange = (e) => {
    setSorted(e.target.value);
  };

  const addUser = () => {
    if (name && age) {
      fetch(defaultUrl, {
        method: "POST",
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
        .then((response) => response.json())
        .then((data: User[]) => {
          console.log(data);
          setName("");
          setAge("");
          fetchUsers();
        })
        .catch((error) => {
          alert("登録に失敗");
          console.error(error);
        });
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [url]);

  useEffect(() => {
    setUrl(buildUrl());
  }, [deleted, sorted]);

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        新規ユーザーの追加
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
        <Button variant="contained" color="primary" onClick={addUser}>
          追加
        </Button>
      </Box>
      <Typography variant="h5" gutterBottom>
        ユーザー一覧
      </Typography>
      <Grid container>
        <div>
          <Checkbox
            checked={deleted}
            onChange={handleDeleted}
            inputProps={{ "aria-label": "controlled" }}
            id="deleted"
          />
          <label htmlFor="deleted">削除済ユーザーを含む</label>
        </div>
        <Select
          labelId="sort"
          id="sort"
          value={sorted}
          label="Id"
          onChange={sortChange}
        >
          <MenuItem value={"asc"}>昇順</MenuItem>
          <MenuItem value={"desc"}>降順</MenuItem>
        </Select>
      </Grid>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>名前</TableCell>
            <TableCell>年齢</TableCell>
            <TableCell>操作</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.age}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  component={Link}
                  to={`/edit/${user.id}`}
                >
                  編集
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};

export default UserList;
