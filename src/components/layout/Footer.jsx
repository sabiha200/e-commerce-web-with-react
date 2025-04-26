import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook} from "react-icons/fa";
import { LiaPhoneVolumeSolid } from "react-icons/lia";
import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-20">
          <div>
            <img src="/logo.png" alt="logo" />
            <p className="font-normal text-[15px] text-lg text-primary pt-4 pb-8">
              Awesome grocery store website template
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2">
                <div className="text-brand">
                  <CiLocationOn />
                </div>
                <p className="font-normal text-[15px] text-lg text-primary">
                  Address: 5171 W Campbell Ave undefined Kent, Utah 53127 United
                  States
                </p>
              </li>
              <li className="flex items-center gap-2">
                <div className="text-brand">
                  <CiLocationOn />
                </div>
                <p className="font-normal text-[15px] text-lg text-primary">
                  Call Us:(+91) - 540-025-124553
                </p>
              </li>
              <li className="flex items-center gap-2">
                <div className="text-brand">
                  <CiLocationOn />
                </div>
                <p className="font-normal text-[15px] text-lg text-primary">
                  Email:sale@Nest.com
                </p>
              </li>
              <li className="flex items-center gap-2">
                <div className="text-brand">
                  <CiLocationOn />
                </div>
                <p className="font-normal text-[15px] text-lg text-primary">
                  Hours:10:00 - 18:00, Mon - Sat
                </p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-primary">Company</h3>
            <ul className="font-normal text-base text-primary flex flex-col gap-3.5 mt-5">
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Delivery Information</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Support Center</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-primary">Company</h3>
            <ul className="font-normal text-base text-primary flex flex-col gap-3.5 mt-5">
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Delivery Information</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Support Center</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-primary">Company</h3>
            <ul className="font-normal text-base text-primary flex flex-col gap-3.5 mt-5">
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Delivery Information</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Support Center</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-primary">Company</h3>
            <ul className="font-normal text-base text-primary flex flex-col gap-3.5 mt-5">
              <li>
                <Link>About Us</Link>
              </li>
              <li>
                <Link>Delivery Information</Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>
              </li>
              <li>
                <Link>Terms & Conditions</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
              <li>
                <Link>Support Center</Link>
              </li>
              <li>
                <Link>Careers</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-primary">Install App</h3>
            <p className="font-normal text-base text-primary my-5">
              From App Store or Google Play
            </p>
            <div className="flex gap-3">
              <Link to="/">
                <img src="/app-store.png" alt="app-store" />
              </Link>
              <Link to="/">
                <img src="/google-play.png" alt="google-play" />
              </Link>
            </div>
            <p className="font-normal text-base text-primary my-5">
              Secured Payment Gateways
            </p>
            <img src="/payment-method.png" alt="payment-method" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-10 justify-between items-center py-9 border-t border-brand mt-11">
          <p className="font-normal max-w-3xs text-base text-primary my-5">
            {" "}
            © 2024, Nest - HTML Ecommerce Template All rights reserved
          </p>
          <div className="flex gap-8">
            <Link to="1900 - 888" className="ml-auto flex items-center gap-2">
              <LiaPhoneVolumeSolid className=" text-3xl xl:text-4xl text-secondary" />
              <div>
                <p className="text-brand font-bold text-sm xl:text-2xl">
                  {" "}
                  1900 - 888{" "}
                </p>
                <p className="text-secondary font-medium text-xs xl:text-sm">
                  {" "}
                  24/7 Support Center{" "}
                </p>
              </div>
            </Link>
            <Link to="1900 - 888" className="ml-auto flex items-center gap-2">
              <LiaPhoneVolumeSolid className=" text-3xl xl:text-4xl text-secondary" />
              <div>
                <p className="text-brand font-bold text-sm xl:text-2xl">
                  {" "}
                  1900 - 888{" "}
                </p>
                <p className="text-secondary font-medium text-xs xl:text-sm">
                  {" "}
                  24/7 Support Center{" "}
                </p>
              </div>
            </Link>
          </div>
          <div className="gap-1 mt-4">
            <div className="flex items-center justify-center gap-3.5">
              <div>
                <p className="font-bold items-center text-xl text-primary">
                  Follow Us
                </p>
              </div>
              <div>
                <ul className="flex gap-1.5">
                  <li>
                    <Link to="/" className=" text-brand text-2xl items-center">
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className=" text-brand text-2xl items-center">
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className=" text-brand text-2xl items-center">
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className=" text-brand text-2xl items-center">
                      <FaFacebook />
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className=" text-brand text-2xl items-center">
                      <FaFacebook />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <p className="font-normal text-secondary">Up to 15% discount on your first subscribe</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
