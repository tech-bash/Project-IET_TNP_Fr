import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CreateButton = styled.div`
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  display: inline-block;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #007bff;
  color: #fff;
`;

const TableHeaderCell = styled.th`
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
`;

const Dashboard = () => {
  const [placements, setPlacements] = useState([]);

  useEffect(() => {
    // fetch student placement data from the API
    fetch("https://placement-site.onrender.com/api/tnp/placement/list_all/")
      .then((response) => response.json())
      .then((data) => setPlacements(data))
      .catch((error) => console.error("Error fetching placements:", error));
  }, []);

  return (
    <DashboardContainer>
      <h1>Student Placement Details</h1>
      <button to="/create">Create Entry</button>
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>Roll No.</TableHeaderCell>
            <TableHeaderCell>Company</TableHeaderCell>
            <TableHeaderCell>Package</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {placements.map((placement, index) => (
            <TableRow key={index}>
              <TableCell>{placement.name}</TableCell>
              <TableCell>{placement.rollNo}</TableCell>
              <TableCell>{placement.company}</TableCell>
              <TableCell>{placement.package}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </DashboardContainer>
  );
};

export default Dashboard;
