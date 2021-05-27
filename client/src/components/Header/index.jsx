import { Link } from "react-router-dom";

import "./styles.scss";

import logo from "../../assets/logo.png";
import Picture from "../Pictures";

export default function Header() {
  return (
    <header className="header">
    <div className="headerlogo">
        <Link to="/">
          <Picture picture={logo} name={logo} />;
        </Link>
      </div>

      <ul className="headerlist">
        <li className="listHeaderItem">
          <Link to="/login"> Login</Link>
        </li>
        <li className="listHeaderItem">
          <Link to="/bookings"> Reservas</Link>
        </li>
    </ul>


    </header> 
  );

}


