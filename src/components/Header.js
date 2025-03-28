import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";

function Header() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>House Staff</span>
        <ul className='nav'>
          <li>About us</li>
          <li>Contacts</li>
          <li>Profile</li>
        </ul>
        <FaCartShopping onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className='shop-cart'>

          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}

export default Header;
