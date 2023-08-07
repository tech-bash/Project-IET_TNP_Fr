import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LoginForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

const ErrorMessage = styled.div`
  color: #ff0000;
  margin-bottom: 10px;
`;

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform validation here if needed
    // For example, check if the email and password are valid

    // For this example, we'll just display an error if the fields are empty
    if (!formData.email || !formData.password) {
      setError("Please fill in all fields.");
    } else {
      setError("");
      // Perform login/authentication logic here
      // For a basic example, you can just console.log the data
      console.log("Login data:", formData);
    }
  };

  return (
    <LoginForm onSubmit={handleSubmit}>
      <h2>Login</h2>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <InputField
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputField
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
      />
      <Button type="submit">Login</Button>
      <p>
        Don't have an account? <Link to="/register">Register here</Link>.
      </p>
    </LoginForm>
  );
};

export default Login;
