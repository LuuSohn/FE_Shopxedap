import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { signin, signup } from "../../api/auth";
import { Link } from "react-router-dom";

const Signin = () => {
  const onSubmit = async (inputSubmit: any) => {
    try {
      const { data } = await signin(inputSubmit);
      console.log(data);
      localStorage.setItem("users", JSON.stringify(data));
      localStorage.setItem("user", JSON.stringify(data.accessToken));
      if (data.user.role == "admin") {
        alert(
          "Xin Chào quản trị viên: " +
            data.user.name +
            "\n Hãy Nắm tay anh, ta sẽ đến trang admin"
        );
        window.location.href = "/admin/products";
      }
      if (data.user.role == "member") {
        alert(
          "Đăng nhập thành công Xin Chào: " +
            data.user.name +
            "\n Hãy Nắm tay anh, ta sẽ đến trang chủ"
        );
        window.location.href = "/";
      }
    } catch (error) {
      if ((error = 400)) {
        alert("Tài khoản của bạn không chính xác!\n vui lòng kiểm tra lại!");
      }
    }
  };

  return (
    <Form
      //   form={form}
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 700, margin: "auto" }}
      initialValues={{ remember: true }}
      onFinish={onSubmit}
      //   onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="email"
        rules={[{ required: true, message: "Please input your username!" }]}
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

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button htmlType="submit">Đăng nhập</Button>
        <Button style={{ width: 100, marginLeft: 10 }}>
          <Link to={"/signup"}>Đăng ký</Link>
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Signin;
