import { Space, Table, Tag, Button } from "antd";
import type { ColumnsType } from "antd/es/table";
import { Layout, Menu, theme } from 'antd';
import { Link } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;
import { ICategory } from "../../../interface/categories";
import { DashboardOutlined, AppstoreOutlined, ShoppingCartOutlined,ShoppingOutlined, UserOutlined, PhoneOutlined } from '@ant-design/icons';



type Props = {
    categories: ICategory[];
  onRemove: (id: string | number) => void;
};


const CategoryManagementPage = ({ categories, onRemove }: Props) => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const columns: ColumnsType<ICategory> = [
    {
      title: "Tên Danh Mục",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (record) => (
        <Space size="middle">
          <Button  onClick={() => onRemove(record._id)}>
            Xóa
          </Button>
          <Button >
            <Link to={`/admin/category/${record._id}/update`}>Sửa</Link>
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
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, minHeight: 360, background: colorBgContainer }}>
            <Button type="primary" ghost style={{ margin: '20px' }}>
              <Link to={'/admin/category/add'}>Thêm Danh Mục</Link>

            </Button>
            <Table columns={columns} dataSource={categories} />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  );
};

export default CategoryManagementPage;