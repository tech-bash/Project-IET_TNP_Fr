import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import styled from "styled-components";
import LoginPage from "./components/login";

const AppContainer = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
`;

const RegistrationPage = () => {
  return <h2>Registration Page</h2>;
};

const HomePage = () => {
  return <h2>Home Page</h2>;
};

const DashboardPage = () => {
  return <h2>Dashboard Page</h2>;
};

const App = () => {
  return (
    <Router>
      <AppContainer>
        <nav>
          <Link to="/">Login</Link>
          <Link to="/register">Registration</Link>
          <Link to="/home">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
        </nav>

        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App;
