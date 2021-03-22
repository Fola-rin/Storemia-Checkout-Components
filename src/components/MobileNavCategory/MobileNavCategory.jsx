import React from "react";

import "./MobileNavCategory.css";

const MobileNavCategory = (props) => {
	return (
		<div className="mobile-categories-nav-category">
			<a href="/store-items/all-categories.html"></a>
			<div className="mobile-categories-nav-category-img-wrapper">
				<div className="mobile-categories-nav-category-img">
					<img src={props.imgSrc} alt="Category pic" />
				</div>
			</div>
			<h4>{props.name}</h4>
		</div>
	);
};

export default MobileNavCategory;
