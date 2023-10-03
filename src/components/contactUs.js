import React, { useState } from "react";
import styled from "styled-components";

const ContactContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const ContactForm = styled.form`
  background-color: #f5f5f5;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const FormLabel = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 10px;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <ContactContainer>
      <h2>Contact Us</h2>
      <ContactForm onSubmit={handleSubmit}>
        <div>
          <FormLabel htmlFor="name">Name</FormLabel>
          <FormInput
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <FormLabel htmlFor="message">Message</FormLabel>
          <FormTextarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="6"
            required
          />
        </div>
        <FormButton type="submit">Submit</FormButton>
      </ContactForm>
    </ContactContainer>
  );
};

export default ContactUs;