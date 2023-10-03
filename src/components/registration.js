import React, { useState } from "react";
import styled from "styled-components";

const RegistrationContainer = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const RegistrationForm = styled.form`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
`;

const InputField = styled.input`
  width: 100%;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const Registration = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    phone: "",
    password: "",
    password2: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Registration data:", formData);

    try {
      const response = await fetch("https://placement-site.onrender.com/api/account/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log("Registration successful!");
        // You can redirect the user to a new page or perform other actions here
      } else {
        console.error("Registration failed.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <RegistrationContainer>
      <RegistrationForm onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <InputField
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <InputField
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
        <InputField
          type="phone"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
        />
        <InputField
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />        
        <InputField 
          type="password2"
          name="password2"
          placeholder="Confirm Password"
          value={formData.password2}
          onChange={handleChange}
        />
        <Button type="submit">Register</Button>
      </RegistrationForm>
    </RegistrationContainer>
  );
};

export default Registration;