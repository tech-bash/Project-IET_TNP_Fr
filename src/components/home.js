import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div`
  background-image: url("https://lh3.googleusercontent.com/pw/ADCreHfgP61G6j8zHN7h-UxAMpgBG0biN1_bOmcQ4PaH9hnmfOGDR4eihINPfeeq2gxxSMFBKkBf8aD9-hHJ9fnkNRlku37Q4SAl_6l5Zy1rV3rwXqAB-tMUn6iuMcU2l4AOHwvyvZX-Ie1XNc11tW4vVqY4ig=w1164-h873-s-no?authuser=0");
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: #fff;
`;

const Heading = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const Subheading = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Heading>Welcome to IET</Heading>
      <Subheading>Your Path to Excellence Begins Here</Subheading>
    </HomeContainer>
  );
};

export default Home;
