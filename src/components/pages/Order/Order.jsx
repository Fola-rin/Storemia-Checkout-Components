import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BottomNav from "../../BottomNav/BottomNav";
import "./Order.css";
const Order = () => {
	return (
		<div className="container">
			<div className="order-container">
				<div className="order-wrapper">
					<h3>Order has been placed successfully! 🎉</h3>
					<p>Order Number: #161580265763721178</p>
					<div className="next-option">
						<div className="notify-seller mobile-only checkout-link">
							<a href="https://wa.link/1dwcwb">
								<FontAwesomeIcon className="icon" icon={["fab", "whatsapp"]} />{" "}
								<span>Notify Seller</span>
							</a>
						</div>
						<div className="checkout-link">
							<a href="./store-items/all-categories.html">
								Continue Shopping <FontAwesomeIcon icon="shopping-cart" />
							</a>
						</div>
					</div>
				</div>
			</div>
			<BottomNav cartActive="active" />
		</div>
	);
};

export default Order;
