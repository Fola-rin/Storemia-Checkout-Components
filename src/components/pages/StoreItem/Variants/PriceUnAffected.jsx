import React from "react";

const PriceUnAffected = (props) => {
	return (
		<div className="content-wrapper">
			<div className={`content ${props.active}`}>
				<img src={props.imgSrc} alt="Product image" />
			</div>
			<a href="#"></a>
			<span>{props.name}</span>
		</div>
	);
};
//

export default PriceUnAffected;
