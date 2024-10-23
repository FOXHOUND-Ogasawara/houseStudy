import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import UserEdit from "./components/UserEdit";
import UserList from "./components/UserList";

const App: React.FC = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">ユーザー管理サンプルアプリ</Typography>
        </Toolbar>
      </AppBar>
      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/edit/:id" element={<UserEdit />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
