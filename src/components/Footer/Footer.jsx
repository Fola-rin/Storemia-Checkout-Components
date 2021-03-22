import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";

const Footer = () => {
	return (
		<div className="footer-container desktop-only">
			{/* Incase the users will use it */}
			{/* <div className="footer-links">
				<a href="" className="footer-link">
					<FontAwesomeIcon icon={["fab", "twitter"]} />
				</a>
				<a href="" className="footer-link">
					<FontAwesomeIcon icon={["fab", "facebook"]} />
				</a>
				<a href="" className="footer-link">
					<FontAwesomeIcon icon={["fab", "instagram"]} />
				</a>
			</div> */}
			<p>Folarin's Palace © 2021</p>
		</div>
	);
};

export default Footer;
