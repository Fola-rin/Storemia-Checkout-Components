import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BottomNav from "../../BottomNav/BottomNav";

import "./Cart.css";
import CartCard from "./CartCard";
import imgSrc from "../../../assets/product.jpg";

const Cart = () => {
	return (
		<div className="container">
			<div className="cart-container">
				<div className="clear-cart-container">
					<div className="clear-cart-wrapper">
						<a href="#">
							<span>Clear cart</span> <FontAwesomeIcon icon="trash-alt" />
						</a>
					</div>
				</div>
				<CartCard
					imgSrc={imgSrc}
					price="₦5000"
					oldPrice="₦10000"
					name="FolaRin"
				/>
				<CartCard
					imgSrc="https://www.channelstv.com/wp-content/uploads/2012/04/Pure-water.jpg"
					price="₦50"
					oldPrice="₦10"
					name="Pure Water"
				/>
				<CartCard
					imgSrc="https://static.highsnobiety.com/thumbor/6ennOjJC1BVwXWQAttNoXLIJVHU=/1600x2400/static.highsnobiety.com/wp-content/uploads/2020/07/23113337/arsenal-adidas-home-kit-20-21-02.jpg"
					price="₦3000"
					name="Arsenal Jersey"
				/>
				<div class="total-checkout-container">
					<div class="total">
						<span>Total cost: </span>
						<h3>₦10000000</h3>
					</div>
					<div class="checkout-link">
						<a href="/checkout.html">
							Continue to checkout <FontAwesomeIcon icon="arrow-right" />
						</a>
					</div>
				</div>
			</div>

			<BottomNav cartActive="active" />
		</div>
	);
};

export default Cart;
