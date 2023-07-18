import React, { useState ,useEffect} from "react";
import { Space, Table, Tag, Button } from "antd";
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { Checkbox, Form, Input } from 'antd';
import { DashboardOutlined, AppstoreOutlined, ShoppingCartOutlined,ShoppingOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';
import { useNavigate, useParams } from 'react-router-dom'
import { ICategory } from "../../../interface/categories";
import { getOneCategory } from "../../../api/categories";


const { Header, Content, Footer, Sider } = Layout;


const UpdateCategoryPage = (props:any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { id } = useParams()
    const navigate = useNavigate()

    const [category, setCategories] = useState<ICategory>() 
    useEffect(() => {
      getOneCategory(id).then(({data}) => setCategories(data.category));
    }, [])
    const [form] = Form.useForm();


        form.setFieldsValue({ 
            id: category?._id,
            name: category?.name,
        })

    const onFinish = (values: any) => {
      // console.log(values);
      
        props.onUpdate(values);
        // navigate('/admin/products')
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
            <Header style={{ padding: 0, background: '#FFFFFF' }} />
            <Content style={{ margin: '24px 16px 0',textAlign:"center" }}>
              <div style={{ padding: 24, minHeight: 360, background: '#FFFFFF	', }}>
                    <Form form={form} style={{ maxWidth: 600,}} onFinish={onFinish} >
                        <Form.Item
                            label="id"
                            name="id"
                            style={{ display: 'none' }} 
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item
                            label=" Name"
                            name="name"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input />
                        </Form.Item>


                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                          <Button  htmlType="submit">
                             Cập nhập Danh mục
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



export default UpdateCategoryPage