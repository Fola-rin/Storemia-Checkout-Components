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
				<button>
					<FontAwesomeIcon icon="home" />
					<p>Home</p>
				</button>
			</div>
			<div className={`bottom-nav-icon ${props.storeActive}`}>
				<button>
					<FontAwesomeIcon icon="store" />
					<p>Store</p>
				</button>
			</div>
			<div className={`bottom-nav-icon ${props.cartActive}`}>
				<span className="inventory-count">3</span>
				<button>
					<FontAwesomeIcon icon="shopping-cart" />
					<p>Cart</p>
				</button>
			</div>
			<div className={`bottom-nav-icon ${props.contactActive}`}>
				<button>
					<FontAwesomeIcon icon="phone-alt" />
					<p>Contact</p>
				</button>
			</div>
		</div>
	);
};

export default BottomNav;
