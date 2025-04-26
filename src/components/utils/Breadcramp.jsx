import React from "react";
import { FiHome } from "react-icons/fi";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useLocation } from "react-router";

const Breadcramp = () => {
    const location = useLocation().pathname.split("/")[1];
  return (
    <ul className="flex items-center gap-3 text-secondary font-semibold">
      <li>
        <Link to="/" className="flex items-center gap-1.5 text-brand"> 
        <FiHome />
        <span>Home</span> 
        </Link>
      </li>
      <li>
      <MdKeyboardArrowRight className="text-xs" />
      </li>
      <li>
        <p>{location}</p>
      </li>
    </ul>
  );
};

export default Breadcramp;
