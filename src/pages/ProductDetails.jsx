import { FaStar } from "react-icons/fa";
import ProductSlide from "../components/utils/ProductSlide";
import { IoCartOutline } from "react-icons/io5";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/cartSlice";

const API = {
  images: [
    "https://i.imgur.com/QkIa5tT.jpeg",
    "https://i.imgur.com/jb5Yu0h.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
  ],
};

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState("1")
  const params = useParams();
  const settings = {
    direction: "horizontal", // or "vertical"
    zoom: true, // or false
  };

  const [productData, setProductData] = useState([]);
  useEffect(() => {
    const api = async () => {
      const options = {
        method: "GET",
        url: "https://api.escuelajs.co/api/v1/products",
        params: { page: "1", limit: "10" },
        headers: { accept: "application/json" },
      };

      try {
        const res = await axios.request(options);

        res.data.find((item) => {
          if (item.id == params.id) {
            setProductData(item);
          }
        });
        console.log(res.data);
      } catch (error) {
        console.error(error.response?.data || error.message);
      }
    };
    api();
  }, []);

  const handleAddCart = () => {
    dispatch(addToCart({quantity, productData}));
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex gap-11">
          <div className="w-1/3 ">
            <ProductSlide settings={settings} api={productData.images} />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-primary">
              {productData?.title}
            </h2>
            <div className="flex gap-3 py-2.5">
              <ul className="flex text-amber-400 text-xs">
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
                <li>
                  <FaStar />
                </li>
              </ul>
              <p className="text-xs font-normal text-secondary">(4.0)</p>
            </div>
            <div className="flex flex-col md:flex-row gap-2 justify-between">
              <h4 className=" text-sm md:text-4xl font-bold text-brand py-5">
                ${productData?.price}
                <span className="text-secondary text-base line-through">
                  {productData.price + 20}
                </span>
              </h4>
            </div>
            <p className="text-base font-normal text-secondary">
              {productData?.description}
            </p>
            <div className="pt-10 flex items-center gap-4">
              <input
              onChange={(e)=> setQuantity(e.target.value)}
                min="1"
                type="number"
                className="border-2 border-brand rounded-lg py-2 w-24 outline-0 text-center text-xl"
              />
              <button
                onClick={handleAddCart}
                className="flex items-center gap-1 text-white bg-brand font-bold text-lg md:px-5 p-2 md:py-2.5 rounded-sm cursor-pointer"
              >
                <IoCartOutline />
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
