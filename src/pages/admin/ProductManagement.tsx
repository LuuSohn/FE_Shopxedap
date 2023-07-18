import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Layout, Menu, theme } from 'antd';
import { Link } from "react-router-dom";
import React, { useState } from "react";
import UpdateProductPage from "./UpdateProduct";
import { updateProduct } from "../../api/product";
const { Header, Content, Footer, Sider } = Layout;
import { IProduct } from "../../interface/products";
import { useParams } from 'react-router-dom';



type Props = {
  products: IProduct[];
  onRemove: (id: string | number) => void;
};


const ProductManagementPage = ({ products, onRemove }: Props) => {

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
          theme="dark" mode="inline"
          defaultSelectedKeys={['4']}

        >
          <Menu.Item>
            <Link to={'/admin/dash'}>Dashboard</Link>
          </Menu.Item>

          <Menu.Item>
            <Link to={'/admin/category'}>Category</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to={'/admin/products'}>Products</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
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