import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import Home from "./components/home";
import Login from "./components/login";
import Registration from "./components/registration";
import Dashboard from "./components/dashboard";
import ContactUs from "./components/contactUs";

const Navbar = styled.nav`
  background-image: url("https://cdn-media-2.freecodecamp.org/w1280/5f9c9cfc740569d1a4ca3543.jpg");
  padding: 10px 0;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const NavLogo = styled.a`
  color: #fff;
  font-size: 24px;
  text-decoration: none;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
`;

const NavLink = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      background-color: #0056b3;
    }
  }
`;

const AppContainer = styled.div`
  font-family: Arial, sans-serif;
`;

function getToken(){
  const tokenString = localStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}

function App() {
  const [token, setToken] = useState();

  return (
    <AppContainer>
      <Router>
        <Navbar>
          <NavContainer>
            <NavLogo href="/"><img src="https://dbrau.ac.in/wp-content/uploads/2022/02/Dr_B._R._Ambedkar_University_Logo.png" style={{width:120, height:120}}></img></NavLogo>
            <NavLinks>
              <NavLink>
                <a href="/">Home</a>
              </NavLink>
              <NavLink>
                <a href="/dashboard">Placements</a>
              </NavLink>
              <NavLink>
              <a href="/contactUs">Contact</a>
              </NavLink>
              <NavLink>
                <a href="/login">Sign in</a>
              </NavLink>
              <NavLink>
                <a href="/register">Sign up</a>
              </NavLink>
            </NavLinks>
          </NavContainer>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setToken={setToken} />} /> {" "}
          <Route path="/register" element={<Registration />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
