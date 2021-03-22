import React from "react";

import "./StoreItem.css";
const StoreItemImg = (props) => {
	return (
		<div className={`store-item-img ${props.active}`}>
			<img src={props.imgSrc} alt="Product image" />
			<a href="#"></a>
		</div>
	);
};

export default StoreItemImg;
