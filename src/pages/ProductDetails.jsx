import { FaStar } from "react-icons/fa";
import ProductSlide from "../components/utils/ProductSlide";
import { IoCartOutline } from "react-icons/io5";

const API = {
  images: [
    "https://i.imgur.com/QkIa5tT.jpeg",
    "https://i.imgur.com/jb5Yu0h.jpeg",
    "https://i.imgur.com/UlxxXyG.jpeg",
  ],
};

const ProductDetails = () => {
  const settings = {
    direction: "horizontal", // or "vertical"
    zoom: true, // or false
  };

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex gap-11">
          <div className="w-1/3 ">
            <ProductSlide settings={settings} api={API.images} />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-primary">
              Seeds of Change Organic Quinoa, Brown
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
                $28.85{" "}
                <span className="text-secondary text-base line-through">
                  $32.8
                </span>
              </h4>
            </div>
            <p className="text-base font-normal text-secondary">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero nam
              aspernatur impedit unde magnam provident culpa similique
              accusantium inventore saepe. Impedit vero molestiae non quibusdam
              fugiat rem quisquam, ullam ipsa!
            </p>
            <div className="pt-10 flex items-center gap-4">
              <input
                type="number"
                value={"1"}
                className="border-2 border-brand rounded-lg py-2 w-24 outline-0 text-center text-xl"
              />
               <button className="flex items-center gap-1 text-white bg-brand font-bold text-lg md:px-5 p-2 md:py-2.5 rounded-sm cursor-pointer">
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
