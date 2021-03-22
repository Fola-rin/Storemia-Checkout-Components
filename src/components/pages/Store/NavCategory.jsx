import React from "react";
import "./Store.css";

const NavCategory = (props) => {
	return (
		<div className={`nav-category ${props.active}`}>
			<a href="/store-items/all-categories.html"></a>
			<div className="nav-category-img-wrapper">
				<div className="nav-category-img">
					<img src={props.imageSrc} alt="Category pic" />
				</div>
			</div>
			<h4>{props.name}</h4>
		</div>
	);
};

export default NavCategory;
