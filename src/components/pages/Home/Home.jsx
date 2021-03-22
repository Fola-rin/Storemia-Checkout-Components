import React from "react";
import BottomNav from "../../BottomNav/BottomNav";
import logo from "../../../assets/Folarin's-palace.jpg";
import coverPhoto from "../../../assets/cover-photo.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Home.css";
import CategoryCard from "../../CategoryCard/CategoryCard.jsx";

const Home = () => {
	return (
		<div className="container">
			<div className="home-container">
				<div
					className="cover-photo-wrapper"
					style={{
						backgroundImage: `url(${coverPhoto})`,
					}}
				>
					<div className="logo-wrapper">
						<img className="logo" src={logo} alt="shop logo" />
					</div>
				</div>
				<div className="shop-info">
					<h1>Welcome to Folarin's Palace</h1>
					<p>
						We bring you the best domestic liquid soaps and skin care products.
						We also provide fashion services and sew any style you can imagine.
					</p>
				</div>
				<div className="body-wrapper-mobile mobile-only">
					<h3>Hello there! 👋🏾</h3>
					<p className="whatsapp-info-link">
						Have any questions or do you want to reach us directly? Chat with us
						directly on
						<a className="whatsapp" href="https://wa.link/1dwcwb">
							{" "}
							Whatsapp{" "}
							<FontAwesomeIcon
								className="icon"
								icon={["fab", "whatsapp"]}
							/>{" "}
						</a>
						by clicking <a href="https://wa.link/1dwcwb">here</a>.
					</p>
				</div>
				<div className="body-wrapper-desktop">
					<h2>Featured products</h2>
					<p>Check out the best collections of products we sell.</p>
					<div className="category-card-grid">
						<CategoryCard
							discount="true"
							name="Product Name"
							cardType="addtocart"
						/>
						<CategoryCard name="Variant Product" cardType="variantproduct" />
						<CategoryCard name="Arsenal Product" cardType="addedtocart" />
						<CategoryCard name="Out of stock" cardType="outofstock" />
					</div>
					<div className="see-more-products">
						<span>
							See more products <a href="/store-items/all-categories.html"></a>
						</span>
					</div>
				</div>
				<BottomNav homeActive="active" />
			</div>
		</div>
	);
};

export default Home;
