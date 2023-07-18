import React from "react";

import { Button, Checkbox, Form, Input } from "antd";
import { signup } from "../../api/auth";
import { Link, useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const onFinish = async (values: any) => {
    try {
      // Call the signup API
      const response = await signup(values);
      // Handle the response
      console.log(response.data); // You can do anything you want with the response
      alert("Đăng kí thành công! Di chuyển đến đăng nhập!");
      // Navigate to the login page
      navigate("/signin");
    } catch (error: any) {
      // Handle the error
      alert(error.response.data.message); // You can display the error message to the user
    }
  };

  return (
    <div>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 800, margin: "0 auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="name"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, message: "Please input your Email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Password"
          name="confirmPassword"
          rules={[
            { required: true, message: "Please input your confirmPassword!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button htmlType="submit">Đăng kí</Button>
          <Button style={{ width: 100, marginLeft: 10 }}>
            <Link to={"/signin"}>Đăng nhập</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
