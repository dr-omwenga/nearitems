import { Link } from 'react-router'; /*Link elements let's go to another page without reloading */
import Logo from './logo';
import './header.css';

type HeaderProps =  {
  cart: {
    productId: string;
    quantity: number;
    deliveryOptionId: string
  }[]; 
};

export function Header({ cart }: HeaderProps){
 
  let totalQuantity = 0;
  cart.forEach((cartItem) => {
    totalQuantity += cartItem.quantity;
  });

  return(
      <div className="header">
        
        <div className="left-section">
          <Link to="/" className="header-link">
            <Logo />
          </Link>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" />

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" />
          </button>
        </div>

        <div className="right-section">
          <Link className="login-link header-link" to="/login">
            <span className="login-text">Account</span>
          </Link>

          <Link className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </Link>

          <Link className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </Link>
        </div>
       </div>  
  );
} 