import "./Footer.css";

import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg";
import twitter from "../../assets/icons/twitter.svg";
import scroll from "../../assets/icons/scroll.svg";

export default function Footer(params) {
  const socialIcons = [facebook, twitter, instagram];
  const socialLinks = socialIcons.map((icon) => (
    <li className="social-link">
      <a href="/">
        <img src={icon} alt="social-icon" />
      </a>
    </li>
  ));

  return (
    <div className="footer-section">
      <ul className="left-corner">{socialLinks}</ul>
      <div className="right-corder">
        <img src={scroll} alt="scroll-icon" />
      </div>
    </div>
  );
}
