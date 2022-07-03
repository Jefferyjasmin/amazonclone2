import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import MenuIcon from "@material-ui/icons/Menu";
// max-width 854

const Header = () => {
  const [{ basket, user }] = useStateValue();
  const [click, setClick] = useState(false);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  // { (<Link to="/">
  //   <img
  //     className="header_logo"
  //     src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
  //     alt="Logo"
  //   />
  // </Link>
  // <div className="header_search">
  //   <input className="header_searchInput" type="text" />
  //   <SearchIcon className="header_searchIcon" />
  // </div>
  // <div className="header_nav">
  //   <Link className="header_link" to={!user && "/login"}>
  //     <div className="header_option" onClick={handleAuthentication}>
  //       <span className="header_optionLineOne">
  //         {user ? user.email.toUpperCase() : "Hello Guest"}
  //       </span>
  //       <span className="header_optionLineTwo">
  //         {user ? "Sign Out" : "Sign In"}
  //       </span>
  //     </div>
  //   </Link>

  //     <div className="header_optionBasket">

  //       < MenuIcon onClick={handleClick}/>
  //     </div>)}

  return (
    <nav className="header">
      {click ? (
        <>
          <Link to="/">
            <img
              className="header_logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Logo"
            />
          </Link>
          <div className="header_search">
            <input className="header_searchInput" type="text" />
            <SearchIcon className="header_searchIcon" />
          </div>
          <div className="header_nav">
            <Link className="header_link" to={!user && "/login"}>
              <div className="header_option" onClick={handleAuthentication}>
                <span className="header_optionLineOne">
                  {user ? user.email.toUpperCase() : "Hello Guest"}
                </span>
                <span className="header_optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>

            <div className="header_optionMenu">
              <MenuIcon />
            </div>
          </div>
        </>
      ) : (
        <>
          {" "}
          <Link to="/">
            <img
              className="header_logo"
              src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Logo"
            />
          </Link>
          <div className="header_search">
            <input className="header_searchInput" type="text" />
            <SearchIcon className="header_searchIcon" />
          </div>
          <div className="header_nav">
            <Link className="header_link" to={!user && "/login"}>
              <div className="header_option" onClick={handleAuthentication}>
                <span className="header_optionLineOne">
                  {user ? user.email.toUpperCase() : "Hello Guest"}
                </span>
                <span className="header_optionLineTwo">
                  {user ? "Sign Out" : "Sign In"}
                </span>
              </div>
            </Link>

            <Link className="header_link" to="/orders">
              <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo"> &Orders</span>
              </div>
            </Link>

            <Link className="header_link" to="">
              <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo "> Prime</span>
              </div>
            </Link>

            <Link className="header_link" to="/checkout">
              <div className="header_optionBasket">
                <ShoppingBasketIcon />
                <span className="header_optionLineTwo  header_basketCount">
                  {basket ? basket.length : 0}
                </span>
              </div>
            </Link>
          </div>
        </>
      )}
    </nav>
  );
};

export default Header;
