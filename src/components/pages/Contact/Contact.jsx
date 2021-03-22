import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import BottomNav from "../../BottomNav/BottomNav";

import "./Contact.css";
const Contact = () => {
	return (
		<div className="container">
			<div className="contact-container">
				<div className="contact-wrapper">
					<h3>Contact Us</h3>
					<div className="form">
						<input type="text" placeholder=" Your Full Name" />
						<div className="duo-input">
							<input type="number" placeholder="Phone Number" />
							<input type="email" placeholder="Email Address" />
						</div>
						<textarea
							type="text"
							rows="5"
							placeholder="Enter your Message or Query"
						></textarea>
					</div>
					<div className="checkout-link">
						<a href="/order.html">
							Submit <i className="fas fa-arrow-right"></i>
						</a>
					</div>
				</div>
				<div className="contact-wrapper">
					<h3>Call Us</h3>
					<a href="#">
						<FontAwesomeIcon icon="phone-alt" />{" "}
						<span>Call us on +2348167978817</span>
					</a>
				</div>
			</div>
			<BottomNav contactActive="active" />
		</div>
	);
};

export default Contact;
