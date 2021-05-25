import { Link } from "react-router-dom";

import "./styles.scss";

import logo from "../../assets/logo.png";
import Picture from "../Pictures";


export default function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        {/* <Link to="/">
          <Picture picture={logo} name={logo}  />;
        </Link> */}
      </div>

      <div className="header__button">
        <Link to="/login">
          {" "}
          Login
        </Link>
      </div>

      <div className="header__button">
        <Link  to="/profile">
          {" "}
          Profile
        </Link>
      </div>
    </header>
  );
}

