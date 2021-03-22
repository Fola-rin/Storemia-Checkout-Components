import React from "react";
import AddToCart from "../../../Buttons/AddToCart";
import AddedToCart from "../../../Buttons/AddedToCart";

const PriceAffected = (props) => {
	return (
		<div className="content">
			<span>Variant value</span>
			<span>₦500000</span>
			{props.added ? <AddedToCart /> : <AddToCart />}
		</div>
	);
};

export default PriceAffected;
