import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="header">
      <img className="restarunt-logo" alt="restaurent logo" src={LOGO_URL} />
      <div className="nav-container">
        <ul>
          <li>Home</li>
          <li>About US</li>
          <li>Contact US</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
