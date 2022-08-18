import { Link } from "react-router-dom";

function FooterMob({ cartPrice }) {
  return (
    <div className="footer_mob">
      <div className="nav-bottom__row-right__icon">
        <img
          src="./images/header/home.png"
          className="nav-bottom__row-right__icon-img"
        />
      </div>
      <div className="nav-bottom__row-right__icon">
        <img
          src="./images/header/heart.png"
          className="nav-bottom__row-right__icon-img"
        />
      </div>
      <div className="nav-bottom__row-right__icon">
        <img
          src="./images/header/user.png"
          className="nav-bottom__row-right__icon-img"
        />
      </div>
      <div className="nav-bottom__row-right__icon cart-icon">
        <Link to="/cart">
          <img
            src="./images/header/cart.png"
            className="nav-bottom__row-right__icon-img cart-icon-img"
          />
        </Link>
      </div>
      <span className="nav-bottom__cart-price footer_mob__price">
        {cartPrice}₽
      </span>
    </div>
  );
}

export default FooterMob;
