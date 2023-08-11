import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/home";
import Login from "./components/login";
import Registration from "./components/registration";
import Dashboard from"./components/dashboard";

const Navbar = styled.nav`
  background-color: #007bff;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

const App = () => {
  return (
    <AppContainer>
      <Router>
        <Navbar>
          <NavLink href="/">Login</NavLink>
          <NavLink href="/home">Home</NavLink>
          <NavLink href="/register">Register</NavLink>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </Navbar>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
