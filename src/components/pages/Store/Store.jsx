import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Store.css";
import NavCategory from "./NavCategory";
import imgSrc from "../../../assets/product.jpg";
import MobileNavCategory from "../../MobileNavCategory/MobileNavCategory";
import CategoryCard from "../../CategoryCard/CategoryCard";
import BottomNav from "../../BottomNav/BottomNav";
const Store = (props) => {
	return (
		<div className="container">
			<div className="search-bar-container">
				<div className="search-bar-wrapper">
					<input type="text" placeholder="Search for products" />
					<a className="search-icon-absolute">
						<i className="fas fa-search"></i>
						<FontAwesomeIcon icon={["fas", "search"]} />
					</a>
				</div>
			</div>
			<div className="store-items-container">
				<div className="categories-nav desktop-only">
					<div className="categories-nav-content">
						<h3>Categories</h3>
						<NavCategory
							active="active"
							name="All Items"
							imageSrc="https://pbs.twimg.com/media/Exu0vEKWQAES_5d?format=jpg&name=large"
						/>
						<NavCategory
							name="Item Type 1"
							imageSrc={
								"https://api.storemia.com/storemiaapi/storage/app/public/itemsimages/1616181983334/9bebb2c1-703b-4ca4-8e98-dc45af852188.JPEG"
							}
						/>
						<NavCategory name="Item Type 1" imageSrc={imgSrc} />
						<NavCategory name="Item Type 1" imageSrc={imgSrc} />
					</div>
				</div>
				<div className="store-items-wrapper">
					<div className="mobile-categories-nav mobile-only">
						<MobileNavCategory
							imgSrc="https://eliansplace.storemia.com/UI/images/onlineshop.jpg"
							name="All Items"
						/>
						<MobileNavCategory imgSrc={imgSrc} name="Item Type 1" />
						<MobileNavCategory imgSrc={imgSrc} name="Item Type 2" />
						<MobileNavCategory imgSrc={imgSrc} name="Item Type 3" />
					</div>
					<div className="category-title-container">
						<div className="category-title mobile-only">
							<h4>Currently showing: {props.name}</h4>
						</div>
					</div>
					<div className="category-card-grid">
						<CategoryCard
							discount="20%"
							name="Product Name"
							cardType="addtocart"
						/>
						<CategoryCard name="Variant Product" cardType="variantproduct" />
						<CategoryCard name="Arsenal Product" cardType="addedtocart" />
						<CategoryCard name="Out of stock" cardType="outofstock" />
					</div>
				</div>
			</div>
			<BottomNav storeActive="active" />
		</div>
	);
};

export default Store;
