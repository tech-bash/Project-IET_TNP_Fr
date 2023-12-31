import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import CreateEntryForm from "./createEntryForm";

const CreateButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const DashboardContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
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

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 400px;
`;

const ModalHeader = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Dashboard = () => {
  const [placements, setPlacements] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://placement-site.onrender.com/api/tnp/placement/list_all/")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setPlacements(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
        }
      )
  }, [])

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <DashboardContainer>
      <h1>Student Placement Dashboard</h1>
      <CreateButton onClick={openModal}>Create Entry</CreateButton>
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>Name</TableHeaderCell>
            <TableHeaderCell>College Roll No.</TableHeaderCell>
            <TableHeaderCell>Company</TableHeaderCell>
            <TableHeaderCell>Package</TableHeaderCell>
          </tr>
        </TableHeader>
        <tbody>
          {placements.map((placement, index) => (
            <TableRow key={index}>
              <TableCell>{placement.user}</TableCell>
              <TableCell>{placement.company_phone}</TableCell>
              <TableCell>{placement.company_name}</TableCell>
              <TableCell>{placement.company_salary}</TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>

      {/* Modal for Creating Entries */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Create Entry Modal"
        style={{
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          },
        }}
      >
        <ModalContainer>
          <ModalContent>
            <ModalHeader>Create Entry</ModalHeader>
            <CreateEntryForm closeModal={closeModal} />
          </ModalContent>
        </ModalContainer>
      </Modal>
    </DashboardContainer>
  );
};

export default Dashboard;

