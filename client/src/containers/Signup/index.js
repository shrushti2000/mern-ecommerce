import React ,{useState}from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
import { Redirect } from "react-router-dom";
import {useDispatch,useSelector} from 'react-redux'
import { signup } from "../../actions";

function Signup() {
  const [firstName,setFirstname]=useState('')
  const [lastName,setLastName]=useState('')
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const auth=useSelector(state => state.auth);
  const user=useSelector(state => state.user);
  const dispatch=useDispatch();

  const userSignup=(e)=>{
    e.preventDefault();
    const user={
      firstName,lastName,email,password
    }
    dispatch(signup(user))
  }

  if(auth.authenticate){
    return <Redirect to={`/`}/>
   }

   if(user.loading){
     return <p>Loading...</p>
   }
  

  return (
    <Layout>
      <Container>
        {user.message}
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userSignup}>
              <Row>
                <Col md={6}>
                  <Input
                    label="Firstname"
                    placeholder="First name"
                    value={firstName}
                    type="text"
                    onChange={(e) =>setFirstname(e.target.value)}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last name"
                    placeholder="last name"
                    value={lastName}
                    type="text"
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </Col>
              </Row>
              <Input
                label="email"
                placeholder="email"
                value={email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                label="password"
                placeholder="password"
                value={password}
                type="password"
                onChange={(e) =>setPassword(e.target.value)}
              />
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}

export default Signup;
