import "./Header.css";

import cart from "../../assets/icons/cart.svg";
import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/profile.svg";

export default function Header(params) {
  const icons = [search, profile, cart];

  const list = icons.map((el, index) => (
    <li key={index} className="nav-el">
      <a href="/">
        <img src={el} alt="icon" />
      </a>
    </li>
  ));

  return (
    <header className="header">
      {" "}
      <nav className="nav">
        <ul className="nav-list">{list}</ul>
      </nav>
    </header>
  );
}
