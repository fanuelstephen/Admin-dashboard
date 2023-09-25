import React from "react";
import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from "react-icons/bs";
const Header = ({ openSiderbar }) => {
  return (
    <header className="header">
      <div className="menu-icon">
        <BsJustify className="icon" onClick={openSiderbar} />
      </div>
      <div className="header-left">
        <BsSearch className="icon" />
      </div>
      <div className="header_right">
        <BsFillBellFill className="icons" />
        <BsFillEnvelopeFill className="icons" />
        <BsPersonCircle className="icons" />
      </div>
    </header>
  );
};

export default Header;
