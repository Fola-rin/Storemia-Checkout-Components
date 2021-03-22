import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "../../assets/Folarin's-palace.jpg";
import "./Header.css";

const Header = (props) => {
	return (
		<div className="nav-header">
			{props.backbtn && (
				<div className="back-btn mobile-only">
					<span>
						<a href="/store-items/all-categories.html">
							<i className="fas fa-arrow-left"></i>
							<FontAwesomeIcon icon={"arrow-left"} />
						</a>
					</span>
				</div>
			)}
			<div className="nav-header-logo-container">
				<div className="nav-header-logo-wrapper">
					<img className="logo" src={logo} alt="shop logo" />
				</div>
				<h3>Folarin's Palace</h3>
			</div>

			<div className="nav-links-container desktop-only">
				<div className="nav-link">
					<a href="/shop.html">Home</a>
				</div>
				<div className="nav-link">
					<a href="./store-items/all-categories.html">Store</a>
				</div>
				<div className="nav-link">
					<a href="/contact.html">Contact</a>
				</div>
			</div>
			<div className="nav-icons-wrapper desktop-only">
				<div className="nav-icon">
					<a href="/cart.html">
						<FontAwesomeIcon icon="shopping-cart" />
					</a>
					<span className="inventory-count">3</span>
				</div>
				<div className="nav-icon">
					<input type="text" placeholder="Search for products" />
					<a className="search-icon-absolute">
						<FontAwesomeIcon icon="search" />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Header;
