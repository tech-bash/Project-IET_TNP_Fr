import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = styled.nav`
  background-color: #007bff;
  padding: 10px;
  display: flex;
  justify-content: space-around;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 5px 10px;
  border-radius: 5px;
  &:hover {
    background-color: #0056b3;
  }
`;

const Home = () => {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
    </div>
  );
};

export default Home;
