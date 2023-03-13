import { useState } from 'react';
import {
  MdOutlineMenu,
  MdOutlineShoppingBag,
  MdPersonOutline,
  MdSearch,
} from 'react-icons/md';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './navbar.scss';
import TopCart from './TopCart';
const Navbar = () => {
  const [onSearch, setOnSearch] = useState(false);

  const { items } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const [showCart, setShowCart] = useState(false);

  // vs Link
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="logo" onClick={() => navigate('/')}>
            DEV
          </div>
        </div>
        <div className="right">
          <ul>
            <li>
              {onSearch && (
                <div className="onSearch">
                  <input type="text" />
                </div>
              )}
            </li>
            <li>
              <div className="link">
                <MdSearch onClick={() => setOnSearch(!onSearch)} />
              </div>
            </li>
            <li>
              <div className="link">
                <MdPersonOutline />
              </div>
            </li>
            <li>
              <div className="badge">
                <div className="link" onClick={() => setShowCart(!showCart)}>
                  <MdOutlineShoppingBag />
                  {items.length > 0 && (
                    <span className="counter">{items.length}</span>
                  )}
                </div>

                {/* TODO: backdrop */}

                {showCart && <TopCart onClose={() => setShowCart(false)} />}
              </div>
            </li>
            <li>
              <div className="link">
                <MdOutlineMenu />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {showCart && (
        <div className="backdrop" onClick={() => setShowCart(false)}></div>
      )}
    </div>
  );
};
export default Navbar;
