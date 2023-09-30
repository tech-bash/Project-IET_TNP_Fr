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
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjk1OTE5NDA0LCJpYXQiOjE2OTU5MTc2MDQsImp0aSI6IjU4OGE5YmQwZjhlNjQ1MjVhZDcyZDE2NTdlNWMxZjRkIiwidXNlcl9pZCI6MX0.E0AMqFoJp3W-aK_icDiaUK9ZZ02cblu5EHwBGWxb4Zo");
    myHeaders.append("Content-Type", "application/json");
    
    var raw = JSON.stringify({
      "user": "akvermaav629@gmail.com",
      "company_name": "Shuk it",
      "company_email": "haha@gmail.com",
      "company_website": "https://www.amazon.in/",
      "company_address": "ha ha street",
      "company_phone": "234235345",
      "company_salary": "3546545",
      "company_location": "bangbang",
      "company_category": "Education"
    });
    
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    
    fetch("https://placement-site.onrender.com/api/tnp/placement/create/", requestOptions)
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
