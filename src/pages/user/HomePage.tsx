import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Headers from "../../layout/header";
import Footers from "../../layout/footer";
import { Button, Card, Descriptions, Divider, Input, Layout, List } from "antd";
import { IProduct } from "../../interface/products";
import { ICategory } from "../../interface/categories";

const { Header, Content, Footer, Sider } = Layout;
const { Search } = Input;

const handleLogout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("users");
  window.location.href = "/";
};

type ProductPageProps = {
  products: IProduct[];
  category: ICategory[];
};

const ProductPage = ({ products, category }: ProductPageProps) => {
  console.log(products);
  console.log(category);

  const [user, setUser] = useState<any>();
  const [role, setRole] = useState<any>();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<IProduct[]>([]);

  useEffect(() => {
    const userFromStorage = localStorage.getItem("users");
    if (userFromStorage) {
      const userObject = JSON.parse(userFromStorage);
      setUser(userObject.user.name);
      setRole(userObject.user.role);
    }
  }, []);

  useEffect(() => {
    const results = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, products]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };
  const [showList, setShowList] = useState<boolean>(false);

  const handleToggleList = () => {
    setShowList(!showList);
  };
  return (
    <Layout>
      <div>
        <header className="border-b border-gray-100 bg-gray-300">
          <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
            <div className="flex items-center gap-4">
              <button type="button" className="p-2 lg:hidden">
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <a href="/" className="flex">
                <span className="sr-only">Logo</span>
                <span className="inline-block h-12 w-30 rounded-lg">
                  <img
                    className="bg-black-600"
                    src="https://res.cloudinary.com/db5szckya/image/upload/v1686032892/logo-1_nz4gqi.png"
                    alt=""
                  />
                </span>
              </a>
            </div>

            <div className="flex flex-1 items-center justify-end gap-8">
              <nav
                aria-label="Global"
                className="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
              >
                <a className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                  HOME
                </a>

                <a className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                  BICYCLES
                </a>
                <a className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                  CART
                </a>

                <a className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                  ABOUT US
                </a>
                <a className="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700">
                  CONTACT
                </a>
              </nav>

              <div className="flex items-center">
                <div className="flex items-center border-x border-gray-100">
                  <span className="border-e border-e-gray-100">
                    <a className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="1em"
                        viewBox="0 0 512 512"
                      >
                        <path d="M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                      </svg>

                      <span className="sr-only">Cart</span>
                    </a>
                  </span>

                  <span className="border-e border-e-gray-100">
                    <a
                      href="/signin"
                      className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700"
                    >
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>

                      <span className="sr-only"> Tài khoản </span>
                    </a>
                  </span>

                  <div className="pl-2 relative">
                    <a
                      className="rounded-md px-3 py-2 text-sm font-medium block border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-red-700"
                      onClick={handleToggleList}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                        />
                      </svg>
                    </a>
                    {showList && (
                      <div className="static top-[4rem] right-0 bg-white shadow-lg">
                        <ul className="py-2">
                          <li className="px-4 py-2 hover:bg-gray-100">
                            {category.map((cate, index) => (
                              <li key={index}>
                                <Link to={`category/${cate._id}`}>
                                  {cate.name}
                                </Link>
                              </li>
                            ))}
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>

                  <span className="hidden sm:block">
                    <div className="grid h-16 w-16 place-content-center border-b-4 border-transparent hover:border-red-700">
                      <svg
                        className="h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>

                      <span className="sr-only"> Search </span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
      <Divider orientation="left" plain style={{ color: "black" }}>
        Xin Chào: {user}
      </Divider>

      <div
        style={{
          marginLeft: 16,

          display: "flex",
        }}
      >
        {role === "admin" && (
          <div>
            <Button
              style={{
                width: 95,
              }}
            >
              <Link to="/admin/products">Admin </Link>
            </Button>
            <br />
          </div>
        )}

        {role === "admin" ||
          (role === "member" && (
            <div>
              <Button onClick={handleLogout}>Đăng xuất</Button>
            </div>
          ))}
      </div>

      <Layout style={{ minHeight: "100vh" }}>
        <Content style={{ margin: "0px 16px 0" }}>
          <div style={{ margin: "16px 0" }}>
            <Search
              placeholder="Tìm kiếm sản phẩm"
              onSearch={handleSearch}
              enterButton
            />
          </div>
          <List
            grid={{ gutter: 16, column: 4 }}
            dataSource={searchResults}
            renderItem={(item) => (
              <List.Item>
                <Card title={item.name}>
                  <img
                    style={{ height: 150, maxWidth: 200, margin: "0 auto" }}
                    src={item.image.url}
                    alt=""
                  />
                  <p>Giá: {item.price}</p>
                  <p>Mô tả: {item.description}</p>
                  <Link
                    to={`/products/${item._id}`}
                    className="text-blue-500 hover:text-red-500"
                  >
                    Chi tiết
                  </Link>
                </Card>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
      <div>{Footers()}</div>
    </Layout>
  );
};

export default ProductPage;
