import hamburger from "../../assets/icons/hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/profile.svg";
import shop from "../../assets/icons/shop.svg";
import { useState } from "react";

const Navbar = () => {
  const navList = [
    { src: search, alt: "search" },
    { src: profile, alt: "profile" },
    { src: shop, alt: "shop" },
  ].map((icon, index) => (
    <li key={index}>
      <a href={`#${icon.alt}`}>
        <img src={icon.src} alt={icon.alt} />
      </a>
    </li>
  ));

  const [gender, setGender] = useState(true);
  //MAN : true, WOMAN: false

  return (
    <nav className="flex w-full justify-between xl:justify-normal items-center py-6 xl:py-[2vw] px-6 md:px-[8vw] xl:px-[3vw]">
      <div className="flex gap-[2vw] md:gap-6.5">
        <button className="w-8.5 cursor-pointer">
          <img src={hamburger} alt="menu" />
        </button>
        <a href="#home">
          <img src={logo} alt="logo" />
        </a>
      </div>
      <div className="hidden xl:flex gap-[5vw] text-white text-3xl justify-between flex-1 px-20">
        <a
          href="#men"
          className={`border-b-4 border-transparent transition-colors ${gender && "border-white"}`}
          onClick={() => setGender(true)}
        >
          MEN
        </a>{" "}
        {/** put : ml-auto to push to left */}
        <a
          href="#women"
          className={`border-b-4 border-transparent transition-colors ${!gender && "border-white"}`}
          onClick={() => setGender(false)}
        >
          WOMEN
        </a>{" "}
        {/** put : mr-auto to push to right */}
      </div>
      <ul className="flex items-center w-[38vw] max-w-44.75 md:w-44.75 p-0 justify-between">
        {navList}
      </ul>
    </nav>
  );
};

export default Navbar;
