import hamburger from "../../assets/icons/hamburger.svg";
import logo from "../../assets/icons/logo.svg";
import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/profile.svg";
import shop from "../../assets/icons/shop.svg";

const Navbar = () => {
  const navList = [
    { src: search, alt: "search" },
    { src: profile, alt: "profile" },
    { src: shop, alt: "shop" },
  ].map((icon, index) => (
    <li key={index} className="bg-black">
      <a href="/">
        <img src={icon.src} alt={icon.alt} />
      </a>
    </li>
  ));

  return (
    <nav>
      <button>
        <img src={hamburger} alt="menu" />
      </button>
      <a href="#home">
        <img src={logo} alt="logo" />
      </a>

      <ul>{navList}</ul>
    </nav>
  );
};

export default Navbar;
