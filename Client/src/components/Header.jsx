import { faBars, faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Header = () => {
  const [menuOpenState, setMenuOpenState] = React.useState(false);

  const toggleMenu = () => {
    setMenuOpenState(!menuOpenState);
  };

  return (
    <div className="w-full h-18 bg-gray-50 px-4 md:p-0">
      <div className="lg:flex md:w-10/12 m-auto p-2 justify-between items-center h-18 hidden">
        <span>Welcome to Hotel</span>
        <div className="flex justify-center gap-3 items-center">
          <div>
            <FontAwesomeIcon icon={faPhone} />
            <span className="pl-2">+123-12345678</span>
          </div>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="pl-2">contact@hotel.com</span>
          </div>
        </div>
      </div>
      <hr className="h-1 bg-gray-200" />
      <div className="flex md:w-10/12 m-auto justify-between items-center h-12">
        <div>Hotel</div>
        <span className="md:hidden">
          <button onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </span>
        <div className="md:flex hidden list-none gap-3 justify-center items-center">
          <li>Home</li>
          <li>Blog</li>
          <li>Contact</li>
        </div>
      </div>
      {!menuOpenState ? null : (
        <div className="flex list-none md:hidden gap-3 justify-center items-center flex-col">
          <li className="w-full text-left border-b">Home</li>
          <li className="w-full text-left border-b">Blog</li>
          <li className="w-full text-left">Contact</li>
        </div>
      )}
    </div>
  );
};

export default Header;
