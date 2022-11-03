import React from "react";
import { Link , useNavigate} from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useUserAuth } from "../../../contexts/userAuthContext";

const SignUpComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signUpUser ,  } = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUpUser(email, password);
      navigate("/Home")
    } catch (err) {
      setError(err.message );
    }
  };

  return (
    <>
      <div className="p-4 box md">
        <h2 className="mb-3">FireBase Sign up</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="email adress"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit" >
              Sing Up
            </Button>
          </div>
        </Form>
      </div>
      <div className="p-4 box mt-3 text-center">
        Already have an account? <Link to="/">Log In</Link>
      </div>
    </>
  );
};
export default SignUpComp;
