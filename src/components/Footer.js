import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Popper from "popper.js";

function Footer() {
	return (
		<footer className="py-4 bg-dark text-white-50 fixed-bottom">
			<div className="container text-center">
				<small>Copyright &copy; TADS</small>
			</div>
		</footer>
	);
}

export default Footer;
