import React from "react";
import Layout from "../../components/Layout";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Input from "../../components/UI/Input";
function Signup() {
  return (
    <Layout>
      <Container>
        <Row style={{ marginTop: "50px" }}>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Row>
                <Col md={6}>
                  <Input
                    label="Firstname"
                    placeholder="First name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
                <Col md={6}>
                  <Input
                    label="Last name"
                    placeholder="last name"
                    value=""
                    type="text"
                    onChange={() => {}}
                  />
                </Col>
              </Row>
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

export default Signup;
