import "./Navbar.css";
import { Link } from "react-router-dom";

import TotalItems from "../CartContent/TotalItems";

const Navbar = () => {
  return (
    <div className="nav-container">
      <nav className='navbar'>
        <Link to={"/"}>
          <h1 className='navbar-logo'>SealSea🦭</h1>
        </Link>
        <Link className='seeCarrito' to={"/cart"}>
          🛒
          <TotalItems />
        </Link>
      </nav>
    </div>
  );
};

export default Navbar
