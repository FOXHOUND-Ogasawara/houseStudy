import { AppBar, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cat from "./components/Cat";
import Header from "./components/Header";
import Weather from "./components/Weather";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/weather">
            お天気
          </Button>
          <Button color="inherit" component={Link} to="/cat">
            猫ちゃん
          </Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Routes>
          <Route path="/weather" element={<Weather />} />
          <Route path="/cat" element={<Cat />} />
          <Route path="/" element={<Weather />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
