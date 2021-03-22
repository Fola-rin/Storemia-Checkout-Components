import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./BottomNav.css";

const BottomNav = (props) => {
	{
		/* add the class "active to the current page the user is viewing, the style is ".bottom-nav-icon.active" in the css*/
	}
	return (
		<div className="bottom-nav mobile-only">
			<div className={`bottom-nav-icon ${props.homeActive}`}>
				{" "}
				{/* The active class is here currently */}
				<a href="/shop.html">
					<FontAwesomeIcon icon="home" />
					<p>Home</p>
				</a>
			</div>
			<div className={`bottom-nav-icon ${props.storeActive}`}>
				<a href="/store-items/all-categories.html">
					<FontAwesomeIcon icon="store" />
					<p>Store</p>
				</a>
			</div>
			<div className={`bottom-nav-icon ${props.cartActive}`}>
				<span className="inventory-count">3</span>
				<a href="/cart.html">
					<FontAwesomeIcon icon="shopping-cart" />
					<p>Cart</p>
				</a>
			</div>
			<div className={`bottom-nav-icon ${props.contactActive}`}>
				<a href="contact.html">
					<FontAwesomeIcon icon="phone-alt" />
					<p>Contact</p>
				</a>
			</div>
		</div>
	);
};

export default BottomNav;
