import React from "react";
import { Link } from "react-router";
import Breadcramp from "../components/utils/Breadcramp";
import LeafletMap from "../components/leafletMap";

const Contact = () => {
  return (
    <section className=" border-t  border-[#cecece] overflow-y-auto">
      <div className="container hidden xl:block py-8">
        <div className="-mt-1 border-b-2 border-gray-100 pb-6">
          <Breadcramp />
        </div>
      </div>
      <div className="container">
        <h1 className="font-bold text-lg md:text-2xl text-brand pt-12 pb-5">
          How can help you?
        </h1>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="lg:w-[400px]">
            <h1 className="font-bold text-4xl md:text-5xl text-primary">
              Let us know how we can help you
            </h1>
            <p className=" font-normal text-base py-6 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <p className=" font-normal text-base  pb-3 md:pb-8 text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="md:w-[400px]">
            <h1 className="font-bold text-xl text-primary pt-3 md:pt-10">
              01. Visit Feedback
            </h1>
            <p className=" w font-normal text-base  text-secondary py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <h1 className="font-bold text-xl text-primary pb-3 md:pb-5">
              02. Billing Inquiries
            </h1>
            <p className=" font-normal text-base  text-secondary pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className=" w-fit md:w-[400px]">
            <h1 className="font-bold text-xl text-primary pt-3 md:pt-10">
              03. Employer Services
            </h1>
            <p className=" font-normal text-base  text-secondary py-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <h1 className="font-bold text-xl text-primary pb-5">
              04.General Inquiries
            </h1>
            <p className=" font-normal text-base  text-secondary pb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
        <div className="py-8">
          <h2 className="text-xl font-bold text-brand mb-4">Our Location</h2>
          <LeafletMap />
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="lg:pl-36">
            <h1 className="text-2xl text-brand font-bold ">Office</h1>
            <ul className="py-5 text-sm text-secondary">
              <li>
                <Link> 205 North Michigan Avenue, Suite 810</Link>
              </li>
              <li>
                <Link> Chicago, 60601, USA</Link>
              </li>
              <li>
                <Link> Phone: (123) 456-7890</Link>
              </li>
              <li>
                <Link> Email: contact@Evara.com</Link>
              </li>
              <button className="py-2 px-4 mt-4 cursor-pointer hover:bg-yellow-400 bg-brand rounded-md text-white font-bold">
                View Map
              </button>
            </ul>
          </div>

          <div className="lg:pl-36">
            <h1 className="text-2xl text-brand font-bold ">Office</h1>
            <ul className="py-5 text-sm text-secondary">
              <li>
                <Link> 205 North Michigan Avenue, Suite 810</Link>
              </li>
              <li>
                <Link> Chicago, 60601, USA</Link>
              </li>
              <li>
                <Link> Phone: (123) 456-7890</Link>
              </li>
              <li>
                <Link> Email: contact@Evara.com</Link>
              </li>
              <button className="py-2 px-4 mt-4 cursor-pointer hover:bg-yellow-400 bg-brand rounded-md text-white font-bold">
                View Map
              </button>
            </ul>
          </div>

          <div className="lg:pl-36">
            <h1 className="text-2xl text-brand font-bold ">Office</h1>
            <ul className="py-5 text-sm text-secondary">
              <li>
                <Link> 205 North Michigan Avenue, Suite 810</Link>
              </li>
              <li>
                <Link> Chicago, 60601, USA</Link>
              </li>
              <li>
                <Link> Phone: (123) 456-7890</Link>
              </li>
              <li>
                <Link> Email: contact@Evara.com</Link>
              </li>
              <button className="py-2 px-4 mt-4 cursor-pointer hover:bg-yellow-400 bg-brand rounded-md text-white font-bold">
                View Map
              </button>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:gap-12">
          <div className="md:max-w-[890px] w-fit  md:pl-36 py-15   ">
            <h2 className="text-2xl font-semibold text-brand mb-4">
              Contact Us
            </h2>
            <form className="grid grid-cols-2  gap-2 md:gap-4">
              <div className="mb-2">
                <label className="block text-gray-800 mb-1 " htmlFor="name">
                  Your Name
                </label>
                <input
                  className="w-full px-4 py-2 bg-white rounded-lg text-sm border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand transition duration-300"
                  placeholder="Enter your name"
                  type="text"
                  id="name"
                  name="name"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-800 mb-1 " htmlFor="email">
                  Your Email
                </label>
                <input
                  className="w-full px-4 py-2 bg-white0 text-sm rounded-lg border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand transition duration-300"
                  placeholder="Enter your email"
                  name="email"
                  id="email"
                  type="email"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-800 mb-1 " htmlFor="phone">
                  Phone no
                </label>
                <input
                  className="w-full px-4 py-2 bg-white rounded-lg text-sm border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand transition duration-300"
                  placeholder="Enter your phone no"
                  type="tel"
                  id="phone"
                  name="phone"
                />
              </div>
              <div className="mb-2">
                <label className="block text-gray-800 mb-1 " htmlFor="subject">
                  Subject
                </label>
                <input
                  className="w-full px-4 py-2 bg-white rounded-lg text-sm border-gray-200 focus:outline-none focus:ring-1 focus:ring-brand transition duration-300"
                  placeholder="Enter your subject"
                  name="subject"
                  id="subject"
                  type="text"
                />
              </div>
              <div>
                <div className="mb-2">
                  <label className="block text-gray-800 mb-1 " htmlFor="message">
                    Your Message
                  </label>
                  <textarea
                    className="w-fit md:w-96 px-4 py-2 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-brand transition duration-300"
                    rows="4"
                    placeholder="Enter your message"
                    name="message"
                    id="message"
                  />
                </div>
                <button
                  className="w-fit bg-primary text-white py-2 px-4 rounded-lg "
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className=" md:pr-36 md:py-15  ">
            <img src="/contact-2.png" alt="contact-2" className="w-fit" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
