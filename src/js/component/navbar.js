import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar fixed-top bg-dark border-bottom border-body" data-bs-theme="dark">
			<div className="container">
				<div className="d-flex justify-content-end align-items-center">
				<Link to="/" className="text-decoration-none">
						<span className="navbar-brand mb-0 h1">Agendas-Contacts</span>
					</Link>	
				</div>
				<div className="d-flex justify-content-end align-items-center">
					<Link to="/create-contact" className="text-decoration-none">
						<span className="navbar-brand mb-0 h1">Add Contact</span>
					</Link>	
				</div>
			</div>
		</nav>
	);
};
