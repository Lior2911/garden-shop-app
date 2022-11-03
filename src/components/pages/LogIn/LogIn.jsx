import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState } from "react";
import { useUserAuth } from "../../../contexts/userAuthContext";
import GoogleButton from "react-google-button";

const LogInComp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { LogInUser ,googleSignIn } = useUserAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await LogInUser(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };
  const handleGoogleSignIn= async (e)=>{
    e.preventDefault();
    try{
      await googleSignIn();
      navigate("/home")
    }
    catch(err){
      setError(err.message)
    }
  };
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Fire base Log In</h2>
        {error && <Alert variant="danger">{error}</Alert>}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email adress"
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="Password"
              placeholder="Password adress"
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
        </Form>
      </div>
        <hr/>
        <div>
            <GoogleButton className="g-btn " type="dark"
            onClick={handleGoogleSignIn} />

        </div>

      <div className="p-4 box mt-3 text-center">
        Dont have account? <Link to="/SignUp">sign up</Link>
      </div>
    </>
  );
};
export default LogInComp;
