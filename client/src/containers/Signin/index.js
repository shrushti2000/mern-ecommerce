import React,{useState,useEffect} from "react";

import Input from "../../components/UI/Input";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layout";
import {login,isUserLoggedIn} from '../../actions';
import {useDispatch,useSelector} from 'react-redux'
import { Redirect } from "react-router-dom";
const  Signin=(props)=> {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const [error,setError]=useState('')
  const auth=useSelector(state => state.auth);
  const dispatch=useDispatch();

  useEffect(()=>{
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())
    }
    dispatch(isUserLoggedIn())
  },[])

  const userLogin=(e)=>{
    e.preventDefault();

    const user={
     email,password
    }
    dispatch(login(user));
  }
  if(auth.authenticate){
    return <Redirect to={`/`}/> }
  return (
    <Layout>
      <Container>
        <Row style={{ margin: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={userLogin}>
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
                onChange={(e) => setPassword(e.target.value)}
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

export default Signin;
