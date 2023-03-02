import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const login  = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
    <div className="card-body mb-5" style={{}}>
      <Card>
        <Card.Body className="w-100">
          <h2 className="text-center mb-4" >Log In</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <div style={{paddingLeft:"500px"}}>
            <Form.Group id="email" className="w-50" >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password" className="w-50">
              <Form.Label>Password</Form.Label>
              
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-50 my-3" type="submit">
              Log In
            </Button>
            </div>
          </Form>
          
          <br></br>
          <div style={{paddingLeft:"500px"}}>
          <div className="w-50 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
          </div>
        </Card.Body>
      </Card>
      <div style={{paddingLeft:"500px"}}>
      <div className="w-50 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      </div>
      </div>
    </>
  )
}
