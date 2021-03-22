import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import AddedToCart from "../../Buttons/AddedToCart";

const CartCard = (props) => {
	return (
		<div className="cart-card">
			<div className="cart-card-img">
				<img src={props.imgSrc} alt="Product image" />
			</div>
			<div className="card-cart-details">
				<h3 className="name">{props.name}</h3>
				<p>
					Price:{" "}
					{props.oldPrice && (
						<span className="old-price">{props.oldPrice}</span>
					)}{" "}
					<span className="price">{props.price}</span>
				</p>
				<p className="qty">Quantity:</p>
				<div className="add-remove-cart">
					<AddedToCart />
					<span className="remove-item desktop-only">Remove item</span>
				</div>
			</div>

			<div className="remove-item mobile-only">
				<FontAwesomeIcon icon="trash-alt" />
			</div>
		</div>
	);
};

export default CartCard;
