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
    <div className="" style={{marginTop:"40px"}}>
        <h1 style={{textAlign:"center",marginBottom:"40px",fontSize:"35px",marginLeft:"125px"}}>Đăng Ký Tài Khoản</h1>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: "0 auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Tên Người dùng"
          name="name"
          rules={[{ required: true, message: "Vui lòng nhập Tên người dùng!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="Email"
          label="Email"
          rules={[{ required: true, message: "Vui lòng nhập Email!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Mật Khẩu"
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item
          label="Nhập lại mật khẩu"
          name="confirmPassword"
          rules={[
            { required: true, message: "Vui lòng nhập lại mật khẩu!" },
          ]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button  htmlType="submit">Đăng kí</Button>
          <Button style={{ width: 100, marginLeft: 10 }}>
            <Link to={"/signin"}>Đăng nhập</Link>
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Signup;
