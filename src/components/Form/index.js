import React from "react";
import { Form, Input, Button, Row, Coll, Col } from "antd";
import styled from "styled-components";

const Container = styled.div`
  background-color: blue;
`;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const BaseForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const form = (
    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button
          style={{ width: "100%", backgroundColor: "orange" }}
          type="primary"
          htmlType="submit"
        >
          LOGIN
        </Button>
      </Form.Item>
    </Form>
  );

  return (
    <Container>
      <Row>
        <Col md={12}></Col>
        <Col md={12}>
          <Row>
            <Col md={6} gutter={[10, 10]}>
              <h1>Login</h1>
            </Col>
          </Row>
          <Row>
            <Col md={24}>{form}</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default BaseForm;
