import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { showToast } from "../../helpers";
import { message } from "antd";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setInput({ ...input, [name]: value });
  };
  const handleLogin = async () => {
    try {
      let { email, password } = input;
      const endpoint = "http://localhost:8000/api/login";
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      console.log("response", response);
      const data = await response.json();
      if (response.status !== 200) {
        console.log(data);
      }
    } catch (error) {
      console.log(error.password);
    }
  };

  return (
    <Row className="justify-content-md-center">
      <Container>
        <Col
          md={4}
          style={{
            margin: "100px auto",
          }}
        >
          <Card>
            <Card.Header className="text-center">Login Form</Card.Header>
            <Card.Body>
              <Card.Text>
                <Form.Group className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter Email" value={input.email} name="email" onChange={handleInput}></Form.Control>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" value={input.password} placeholder="Enter Password" onChange={handleInput} name="password"></Form.Control>
                </Form.Group>
              </Card.Text>
              <Button variant="primary" onClick={handleLogin}>
                Sign In
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Container>
    </Row>
  );
};

export default Login;
