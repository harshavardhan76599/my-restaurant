import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {

  const [login, setLogin] = useState("Login");

  return (
    <div className="header">
      <img className="restarunt-logo" alt="restaurent logo" src={LOGO_URL} />
      <div className="nav-container">
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About US</Link></li>
          <li><Link to={"/contact"}>Contact US</Link></li>
          <li>Cart</li>
          <li><button onClick={()=>{(login =='Login')? setLogin("LogOut"): setLogin("Login")}} >{login}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
