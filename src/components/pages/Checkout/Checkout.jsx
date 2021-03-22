import React from "react";
import BottomNav from "../../BottomNav/BottomNav";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Checkout.css";
const Checkout = () => {
	return (
		<div class="container">
			<div class="checkout-container">
				<div className="delivery-container">
					<h3>Delivery Location</h3>
					<input type="text" placeholder="Please select location" />
					<p>Deliver cost to Ajah: ₦1000</p>
				</div>
				<div class="billing-details-container">
					<h3>Billing details</h3>
					<div class="form">
						<input type="text" placeholder=" Your Full Name" />
						<input type="text" placeholder="Nationality" />
						<div class="duo-input">
							<input type="number" placeholder="Phone Number" />
							<input type="email" placeholder="Email Address" />
						</div>

						<textarea
							type="text"
							rows="5"
							placeholder="Delivery Address"
						></textarea>
					</div>
				</div>
				<div class="payment-mode-container">
					<h3>Payment Mode</h3>
					<div class="payment-mode-content">
						<div>
							<h4>Pay Now</h4>
							<p>Momo, USSD, Bank Cards</p>
						</div>
						<input type="checkbox" name="Pay" />
					</div>
					<div class="payment-mode-content">
						<div>
							<h4>Pay Later</h4>
							<p>Place order and pay on delivery</p>
						</div>

						<input type="checkbox" name="Pay" />
					</div>
				</div>
				<div class="total-checkout-container">
					<div class="total">
						<span>Total cost: </span>
						<h3>₦10000000</h3>
					</div>
					<div class="checkout-link">
						<a href="/checkout.html">
							Continue <FontAwesomeIcon icon="arrow-right" />
						</a>
					</div>
				</div>
			</div>
			<BottomNav cartActive="active" />
		</div>
	);
};

export default Checkout;
