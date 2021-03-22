import React from "react";

import BottomNav from "../../BottomNav/BottomNav";

import "./StoreItem.css";
import StoreItemImg from "./StoreItemImg";
import PriceAffected from "./Variants/PriceAffected";
import PriceUnAffected from "./Variants/PriceUnAffected";

const StoreItem = () => {
	return (
		<div className="container">
			<div className="store-item-container">
				<div className="store-item-card">
					<div className="store-item-images desktop-only">
						<StoreItemImg
							active="active"
							imgSrc="https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750"
						/>
						<StoreItemImg imgSrc="https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750" />
						<StoreItemImg imgSrc="https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750" />
						<StoreItemImg imgSrc="https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750" />
					</div>
					<div className="images-container">
						<div className="store-item-images mobile-only">
							<StoreItemImg
								active="active"
								imgSrc="https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750"
							/>
							<StoreItemImg imgSrc="https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750" />
							<StoreItemImg imgSrc="https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750" />
							<StoreItemImg imgSrc="https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750" />
						</div>
						<div className="store-item-card-img">
							<img
								src="https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750"
								alt="Product image"
							/>
						</div>
					</div>
					<div className="store-item-card-description">
						<h3 className="name">Variant Product</h3>
						<h3 className="store-item-card-price"> ₦500</h3>
						<hr />
						<p className="details">
							This the the description of the product you see beside this
							description.This the the description of the product you see beside
							this description.This the the description of the product you see
							beside this description.This the the description of the product
							you see beside this description.
						</p>
						<p className="category">
							Category: <span>Item type 1</span>
						</p>
						<div className="variants-container">
							<h4>Select Options</h4>
							<div className="price-not-affected">
								<h4>
									Variant(price unaffected) <span>*</span>
								</h4>
								<div className="contents">
									<PriceUnAffected
										imgSrc="https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750"
										active="active"
										name="Value 1"
									/>
									<PriceUnAffected
										imgSrc="https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750"
										name="Value 2"
									/>
									<PriceUnAffected
										imgSrc="https://www.mcgill.ca/oss/files/oss/styles/hd/public/perfume.jpg?itok=5drIAANl&timestamp=1499713750"
										name="Value 3"
									/>
								</div>
							</div>
							<div className="price-affected">
								<h4>
									Variant(price affected) <span>*</span>
								</h4>
								<div className="contents">
									<PriceAffected />
									<PriceAffected />
									<PriceAffected added="yes" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<BottomNav storeActive="active" />
		</div>
	);
};

export default StoreItem;
