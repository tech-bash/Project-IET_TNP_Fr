import React, { useState } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  margin: 0 auto;
`;

const FormLabel = styled.label`
  font-weight: bold;
  font-size: 1.2rem;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
`;

const FormButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const CreateEntryForm = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    user: "",
    company_phone: "",
    company_name: "",
    company_package: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var myHeaders = new Headers();

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify(formData),
      redirect: 'follow'
    };
    
    const response = fetch("https://placement-site.onrender.com/api/tnp/placement/create/", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
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

        <FormLabel htmlFor="rollNo">College Roll No.:</FormLabel>
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
