// src/components/Header.tsx
import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header: React.FC = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="h6">サンプルアプリケーション</Typography>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
