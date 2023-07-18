import React from 'react';
import { useEffect, useState } from "react";
import { DashboardOutlined, AppstoreOutlined, ShoppingCartOutlined,ShoppingOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form'
import { Button, Checkbox, Form, Input,Select } from 'antd';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { getOneCategory,getAllCategory } from "../../../api/categories";

const { Header, Content, Footer, Sider } = Layout;

const AddProductPage = ({ onAdd }: any) => {
  const [categories, setCategories] = useState([]);
  // console.log(setCategories);
  useEffect(() => {
    (async () => {
      const { data } = await getAllCategory();
      console.log(data);
      setCategories(data.categories.data);
    })();
  }, []);
  // useEffect(() => {
  //   // Fetch dữ liệu category từ API
  //   axios.get('/api/categories')
  //     .then(response => {
  //       setCategories(response.data);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const onFinish = async (values: any) => {
    try {
      await onAdd(values);

    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
     <Sider
                style={{ background: 'white', }}
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                  console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                  console.log(collapsed, type);
                }}
              >
                <div className="logo">
                  <img src="" alt="" />
                </div>
                
                <Menu
                  style={{ background: 'white', color: 'black',marginTop:'50px' }}
                  theme="dark"
                  mode="inline"
                  defaultSelectedKeys={['4']}
                >
                  <Menu.Item key="dashboard" style={{marginBottom: "10px",}} icon={<DashboardOutlined />}>
                    <Link to="/admin">Dashboard</Link>
                  </Menu.Item>
                
                  <Menu.Item key="category" style={{marginBottom: "10px"}} icon={<AppstoreOutlined />}>
                    <Link to="/admin/category">Danh Mục</Link>
                  </Menu.Item>
                
                  <Menu.Item key="products" style={{marginBottom: "10px"}} icon={<ShoppingCartOutlined />}>
                    <Link to="/admin/products">Sản phẩm</Link>
                  </Menu.Item>
                
                  <Menu.Item key="user" style={{marginBottom: "10px"}} icon={<UserOutlined />}>
                    <Link to="/admin/user">Tài Khoản</Link>
                  </Menu.Item>
                
                  <Menu.Item key="order" style={{marginBottom: "10px"}} icon={<ShoppingOutlined />}>
                    <Link to="/admin/order">Giỏ hàng</Link>
                  </Menu.Item>
                
                  <Menu.Item key="contact" style={{marginBottom: "10px"}} icon={<PhoneOutlined />}>
                    <Link to="/admin/contact">Hỗ Trợ</Link>
                  </Menu.Item>
                
                </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ maxWidth: 800, margin: '0 auto' }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >

              <Form.Item
                label="Tên sản phẩm"
                name="name"
                rules={[{ required: true, message: 'Bạn chưa nhập Tên sản phẩm!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Giá"
                name="price"
                rules={[{ required: true, message: 'Bạn chưa nhập Giá sản phẩm!!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Ảnh"
                name="image"
                rules={[{ required: true, message: 'Bạn chưa nhập Ảnh sản phẩm!!' }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Mô tả"
                name="description"
                rules={[{ required: true, message: 'Bạn chưa nhập Mô tả sản phẩm!!' }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Danh mục"
                name="categoryId"
                rules={[{ required: true, message: 'Bạn chưa nhập categoryId sản phẩm!!' }]}
              >
                <Select>
                  {categories.map(category => (
                    <Select.Option key={category._id} value={category._id}>
                      {category.name}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button  htmlType="submit">
                  Add New Product
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default AddProductPage