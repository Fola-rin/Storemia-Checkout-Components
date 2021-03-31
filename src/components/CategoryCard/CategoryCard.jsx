import React from "react";
import productImg from "../../assets/product.jpg";
import productImgVariant from "../../assets/product.jpg";
import AddToCart from "../Buttons/AddToCart";
import OutOfStock from "../Buttons/OutOfStock";
import VariantProduct from "../Buttons/VariantProduct";
import AddedToCart from "../Buttons/AddedToCart";

import "./CategoryCard.css";

const CategoryCard = (props) => {
	console.log(props.cardType);
	return (
		<div className="category-card">
			{props.discount && (
				<span className="discount-rate">-{props.discount}</span>
			)}
			<div className="category-card-img">
				<a href="./store-items/store-item.html"></a>
				<img
					src={
						"https://pbs.twimg.com/media/Exu0vEKWQAES_5d?format=jpg&name=large"
					}
					alt="product image"
				/>
			</div>
			<div className="category-card-details">
				<p className="name">{props.name}</p>
				<div className="discount-price">
					{props.discount && <h3 className="old-price">₦5000000</h3>}
					<h3 className="price">₦2500000</h3>
				</div>
				{props.cardType === "addtocart" && <AddToCart />}
				{props.cardType === "outofstock" && <OutOfStock />}

				{props.cardType === "variantproduct" && <VariantProduct />}
				{props.cardType === "addedtocart" && <AddedToCart />}
			</div>
		</div>
	);
};

export default CategoryCard;
