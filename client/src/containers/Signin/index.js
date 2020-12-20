import React from "react";
import Input from "../../components/UI/Input";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Layout from "../../components/Layout";

function Signin() {
  return (
    <Layout>
      <Container>
        <Row style={{ margin: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Input
                label="email"
                placeholder="email"
                value=""
                type="email"
                onChange={() => {}}
              />
              <Input
                label="password"
                placeholder="password"
                value=""
                type="password"
                onChange={() => {}}
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
