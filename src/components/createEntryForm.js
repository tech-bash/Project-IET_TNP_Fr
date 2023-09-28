import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const FormLabel = styled.label`
  font-weight: bold;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const CreateEntryForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNo: "",
    company: "",
    package: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send a Get request to your API to create a new entry
    fetch("https://placement-site.onrender.com/api/tnp/placement/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          closeModal();
        } else {
          console.error("Error creating entry:", response.statusText);
        }
      })
      .catch((error) => {
        console.error("Error creating entry:", error);
      });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormLabel htmlFor="name">Name:</FormLabel>
        <FormInput
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <FormLabel htmlFor="rollNo">Roll No.:</FormLabel>
        <FormInput
          type="text"
          id="rollNo"
          name="rollNo"
          value={formData.rollNo}
          onChange={handleChange}
          required
        />

        <FormLabel htmlFor="company">Company:</FormLabel>
        <FormInput
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          required
        />

        <FormLabel htmlFor="package">Package:</FormLabel>
        <FormInput
          type="text"
          id="package"
          name="package"
          value={formData.package}
          onChange={handleChange}
          required
        />

        <FormButton type="submit">Create</FormButton>
      </Form>
    </FormContainer>
  );
};

export default CreateEntryForm;
