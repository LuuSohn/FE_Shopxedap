import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Layout, Menu, theme } from 'antd';
import { Link } from "react-router-dom";
import React, { useState,useEffect } from "react";
import UpdateProductPage from "./UpdateProduct";
const { Header, Content, Footer, Sider } = Layout;
import { IProduct } from "../../../interface/products";
import { useParams } from 'react-router-dom';
import { getOneCategory,getAllCategory } from "../../../api/categories";
import { DashboardOutlined, AppstoreOutlined, ShoppingCartOutlined,ShoppingOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';



type Props = {
  products: IProduct[];
  onRemove: (id: string | number) => void;
};


const ProductManagementPage = ({ products, onRemove }: Props) => {
  const [categories, setCategories] = useState([]);
  // console.log(setCategories);
  useEffect(() => {
    (async () => {
      const { data } = await getAllCategory();
      console.log(data);
      setCategories(data.categories.data);
    })();
  }, []);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const columns: ColumnsType<IProduct> = [
    {
      title: "Product name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",

    },
    {
      title: "Product image",
      dataIndex: "image",
      key: "image",
     render: (_, data) => (
        <img src={data?.image} width={"120px"} height={"100px"} alt="" />
      ),
    },
    {
      title: "Product description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "categoryId",
      key: "categoryId",
      render: (categoryId) => {
        const category = categories.find((c) => c._id === categoryId);
        return category ? category.name : "";
      },
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button  onClick={() => onRemove(record._id)}>
            Remove
          </Button>
          <Button >
            <Link to={`/admin/products/${record._id}/update`}>update</Link>
          </Button>
          {/* <MyButton productId={record.id} />  */}
        </Space>

      ),
    },
  ];
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
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: '#FFFFFF' }}>
            <Button type="primary" ghost style={{ margin: '20px' }}>
              <Link to={'/admin/products/add'}>Thêm Sản Phẩm</Link>

            </Button>
            <Table columns={columns} dataSource={products} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default ProductManagementPage;