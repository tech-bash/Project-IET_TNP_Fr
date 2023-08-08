import React from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Card = styled.div`
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  margin: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Title>Dashboard</Title>
      <Card>
        <h3>Card 1</h3>
        <p>This is the content of Card 1.</p>
      </Card>
      <Card>
        <h3>Card 2</h3>
        <p>This is the content of Card 2.</p>
      </Card>
      <Card>
        <h3>Card 3</h3>
        <p>This is the content of Card 3.</p>
      </Card>
    </DashboardContainer>
  );
};

export default Dashboard;
