import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Headers from "../../layout/header";
import Footers from "../../layout/footer";
import { getOneProduct } from "../../api/product";
import { ICategory } from "../../interface/categories";

type Props = {
  category: ICategory[];
};

const ProductDetail = ({ category }: Props) => {
  const { id } = useParams();
  const [product, setProduct] = useState({
    id: 0,
    name: "",
    price: 0,
    image: "",
    description: "",
    // description: "",
  });
  useEffect(() => {
    getOneProduct(id).then(({ data }) => setProduct(data.product));
  }, []);
  const [showList, setShowList] = useState<boolean>(false);

  const handleToggleList = () => {
    setShowList(!showList);
  };
  return (
    <div>
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
      <div>
        <section>
          <div className="relative mx-auto max-w-screen-xl px-4 py-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
              <div className=" gap-4 md:grid-cols-1">
                <img
                  alt="Les Paul"
                  src={product.image.url}
                  className="aspect-square w-full rounded-xl object-cover"
                />
              </div>

              <div className="sticky top-0">
                <strong className="rounded-full border border-blue-600 bg-gray-100 px-3 py-0.5 text-xs font-medium tracking-wide text-blue-600">
                  Thông tin sản phẩm
                </strong>

                <div className="mt-8 flex justify-between">
                  <div className="max-w-[35ch] space-y-2">
                    <h1 className="text-xl font-bold sm:text-2xl">
                      {product.name}
                    </h1>

                    <p className="text-sm">đánh giá</p>

                    <div className="-ms-0.5 flex">
                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-yellow-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>

                      <svg
                        className="h-5 w-5 text-gray-200"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                  </div>

                  <p className="text-lg font-bold">{product.price} đ</p>
                </div>

                <div className="mt-4">
                  <div className="prose max-w-none flex gap-2">
                    <h2>Mô tả: </h2>
                    <p>{product.description}</p>
                  </div>

                  <button className="mt-2 text-sm font-medium underline">
                    Read More
                  </button>
                </div>

                <form className="mt-8">
                  <fieldset>
                    <legend className="mb-1 text-sm font-medium">Color</legend>

                    <div className="flex flex-wrap gap-1">
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="color"
                          id="color_tt"
                          className="peer sr-only"
                        />

                        <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          Texas Tea
                        </span>
                      </label>

                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="color"
                          id="color_fr"
                          className="peer sr-only"
                        />

                        <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          Fiesta Red
                        </span>
                      </label>

                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="color"
                          id="color_cb"
                          className="peer sr-only"
                        />

                        <span className="group inline-block rounded-full border px-3 py-1 text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          Cobalt Blue
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  <fieldset className="mt-4">
                    <legend className="mb-1 text-sm font-medium">Size</legend>

                    <div className="flex flex-wrap gap-1">
                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size_xs"
                          className="peer sr-only"
                        />

                        <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          XS
                        </span>
                      </label>

                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size_s"
                          className="peer sr-only"
                        />

                        <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          S
                        </span>
                      </label>

                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size_m"
                          className="peer sr-only"
                        />

                        <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          M
                        </span>
                      </label>

                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size_l"
                          className="peer sr-only"
                        />

                        <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          L
                        </span>
                      </label>

                      <label className="cursor-pointer">
                        <input
                          type="radio"
                          name="size"
                          id="size_xl"
                          className="peer sr-only"
                        />

                        <span className="group inline-flex h-8 w-8 items-center justify-center rounded-full border text-xs font-medium peer-checked:bg-black peer-checked:text-white">
                          XL
                        </span>
                      </label>
                    </div>
                  </fieldset>

                  <div className="mt-8 flex gap-4">
                    <div>
                      <label className="sr-only">Qty</label>

                      <input
                        type="number"
                        id="quantity"
                        min="1"
                        value="1"
                        className="w-12 rounded border-gray-200 py-3 text-center text-xs [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="block rounded bg-green-600 px-5 py-3 text-xs font-medium text-white hover:bg-green-500"
                    >
                      Add to Cart
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="container mt-5 mb-5">
        <div className="d-flex justify-content-center row">
          <div className="d-flex flex-column col-md-8">
            <div className="coment-bottom bg-white p-2 px-4">
              <form>
                <div className="d-flex flex-row add-comment-section mt-4 mb-4">
                  <input
                    type="text"
                    className="form-control mr-3"
                    placeholder="Add comment"
                  />
                  <button className="btn btn-primary" type="submit">
                    Comment
                  </button>
                </div>
              </form>

              <h1 className="py-6">Chưa có bình luận nào về sản phẩm này</h1>
              <div className="commented-section mt-2">
                <div className="d-flex flex-row align-items-center commented-user">
                  <h5 className="mr-2 pb-2">Tên : </h5>
                </div>
                <div className="comment-text-sm">
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:col-span-3 m-10">
        <h1 className="text-2xl font-bold mb-3">Sản phẩm tương tự</h1>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <li>
            <a className="group block overflow-hidden">
              <img
                src="{{ relatedProduct.image.url }}"
                alt=""
                className="h-5 w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              <div className="relative bg-white pt-3">
                <h3 className="text-xl font-bold text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Tên sản phẩm:
                </h3>

                <h3 className="text-lg text-gray-700 group-hover:underline group-hover:underline-offset-4 my-2">
                  Mô tả:
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">Giá:</span>
                </p>
              </div>
            </a>
          </li>
        </ul>
      </div>
      <div>{Footers()}</div>
    </div>
  );
};

export default ProductDetail;
